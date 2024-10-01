import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import jwt from "jsonwebtoken";

import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { myData } from "./controller/authControler";
import { verifyToken } from "./middleWare";

import authRoute from "./router/authRoute";
import existingDataRoute from "./router/existingDataRoute";
import newDataRoute from "./router/newDataRoute";
import manageUserRoute from "./router/manageUser";
import dataAnalyticsRoute from "./router/dataAnalyticsRoute";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    methods: ["GET", "POST"],
  },
});

export const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/api", myData);

//? auth api
app.use("/api/v1/auth", authRoute);

app.use(verifyToken);

//? existing data api
app.use("/api/v1/ex", existingDataRoute);

//? new data api
app.use("/api/v1/newData", newDataRoute);

//? manage user api
app.use("/api/v1/manageUser", manageUserRoute);

//? data analytics api
app.use("/api/v1/dataAnalytics", dataAnalyticsRoute);

//? socket api
io.use((socket: any, next) => {
  const token = socket.handshake.auth.token;
  if (token) {
    jwt.verify(
      token,
      process.env.JWT_SECRET as string,
      (err: any, decoded: any) => {
        if (err) return next(new Error("Invalid token"));
        socket.user = decoded;
        next();
      }
    );
  } else {
    next(new Error("Authentication error"));
  }
});

io.on("connection", async (socket: any) => {
  console.log("A user connected:", socket.user);

  try {
    const updaedUser = await prisma.user.update({
      where: { id: socket.user.id },
      data: { isOnline: true },
    });
    socket.broadcast.emit("userConnected", {
      id: updaedUser.id,
      name: updaedUser.contactPersonName,
      email: updaedUser.email,
      isOnline: updaedUser.isOnline,
    });
  } catch (error) {
    console.log("Error updating user online status", error);
  }

  // Listen for status update from clients
  socket.on("updateStatus", (statusData: any) => {
    // Broadcast updated status to all connected clients
    io.emit("statusChanged", statusData);
  });

  // Handle socket disconnection
  socket.on("disconnect", async () => {
    console.log("User disconnected:", socket.user.id);

    try {
      const updatedUser = await prisma.user.update({
        where: { id: socket.user.id },
        data: { isOnline: false },
      });
      socket.broadcast.emit("userDisconnected", {
        id: updatedUser.id,
        isOnline: updatedUser.isOnline,
      });
    } catch (error) {
      console.error("Error updating user offline status:", error);
    }
  });
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
