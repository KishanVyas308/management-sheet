import express from "express";

import cors from "cors";
import { PrismaClient } from "@prisma/client";
import authRoute from "./router/authRoute";
import existingDataRoute from "./router/existingDataRoute";
import newDataRoute from "./router/newDataRoute";
import { myData } from "./controller/authControler";

const app = express();

export const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/api", myData);

// signin api
app.use("/api/v1/auth", authRoute);

app.use("/api/v1/ex", existingDataRoute);

app.use("/api/v1/newData", newDataRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
