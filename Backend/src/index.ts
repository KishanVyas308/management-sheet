import express from "express";
import { createServer } from "http";
import WebSocket, { WebSocketServer } from "ws";
import jwt from "jsonwebtoken";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { myData } from "./controller/authControler";
import { verifyToken } from "./middleWare";

import authRoute from "./router/authRoute";
import existingDataRoute from "./router/existingDataRoute";
import shippingBillRoute from "./router/shippingBillRoute";
import manageUserRoute from "./router/manageUser";
import dataAnalyticsRoute from "./router/dataAnalyticsRoute";
import directexportRoute from "./router/directexportRoute";

const app = express();
const httpServer = createServer(app);

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

export const prisma = new PrismaClient();

app.use(express.json());

app.get("/api", myData);

//? auth api
app.use("/api/v1/auth", authRoute);

app.use(verifyToken);

//? existing data api
app.use("/api/v1/ex", existingDataRoute);

//? new data api
app.use("/api/v1/shippingbill", shippingBillRoute);

//? shipping bill
app.use("/api/v1/directexport", directexportRoute)

//? manage user api
app.use("/api/v1/manageUser", manageUserRoute);

//? data analytics api
app.use("/api/v1/dataAnalytics", dataAnalyticsRoute);

// Initialize WebSocket server on the same HTTP server
const wss = new WebSocketServer({ server: httpServer, path: "/api/socket" });

// Authenticate WebSocket connections
wss.on("connection", async (ws : any, req : any) => {
  const params = new URLSearchParams(req.url?.split("?")[1]);
  const token = params.get("token");

  if (!token) {
    ws.close(1008, "Missing authentication token");
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET as string, async (err: any, decoded: any) => {
    if (err) {
      ws.close(1008, "Invalid token");
      return;
    }

    ws.user = decoded;
    console.log("User authenticated:", decoded);

    try {
      // Update the user status as online in the database
      const updatedUser = await prisma.user.update({
        where: { id: decoded.id },
        data: { isOnline: true },
      });

      console.log("User connected:", updatedUser);
      // Broadcast to all clients that the user is online
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({
            event: "userConnected",
            data: {
              id: updatedUser.id,
              name: updatedUser.contactPersonName,
              email: updatedUser.email,
              isOnline: updatedUser.isOnline,
            },
          }));
        }
      });

      // Listen for messages from clients (e.g., status updates)
      ws.on("message", (message : any) => {
        try {
          const parsedMessage = JSON.parse(message.toString());

          if (parsedMessage.event === "updateStatus") {
            // Broadcast updated status to all clients
            wss.clients.forEach((client) => {
              if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({
                  event: "statusChanged",
                  data: parsedMessage.data,
                }));
              }
            });
          }
        } catch (error) {
          console.error("Error parsing WebSocket message:", error);
        }
      });

      // Handle socket disconnection
      ws.on("close", async () => {
        console.log("User disconnected:", decoded.id);

        try {
          // Update user status to offline in the database
          const updatedUser = await prisma.user.update({
            where: { id: decoded.id },
            data: { isOnline: false },
          });

          // Broadcast to all clients that the user is offline
          wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
              client.send(JSON.stringify({
                event: "userDisconnected",
                data: {
                  id: updatedUser.id,
                  isOnline: updatedUser.isOnline,
                },
              }));
            }
          });
        } catch (error) {
          console.error("Error updating user offline status:", error);
        }
      });
    } catch (error) {
      console.error("Error updating user online status:", error);
    }
  });
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
