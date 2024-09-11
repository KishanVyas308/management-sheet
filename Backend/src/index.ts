import express from "express";

import cors from "cors";
import { PrismaClient } from "@prisma/client";
import authRoute from "./router/authRoute";
import existingDataRoute from "./router/existingDataRoute";
import newDataRoute from "./router/newDataRoute";
import { myData } from "./controller/authControler";
import {verifyToken} from "./middleWare";

const app = express();

export const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/api", myData);

//? auth api
app.use("/api/v1/auth", authRoute);

app.use(verifyToken)

//? existing data api
app.use("/api/v1/ex" ,existingDataRoute);

//? new data api
app.use("/api/v1/newData", newDataRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
