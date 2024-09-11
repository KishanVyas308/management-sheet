import express from "express";
import multer from "multer";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import authRoute from "./router/authRoute";
import existingDataRoute from "./router/existingDataRoute";

const app = express();
const upload = multer({ dest: "uploads/" });
export const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());


app.get("/api", (req, res) => {
  return res.send("Hello from Kishan Vyas");
});




// signin api
app.use("/api/v1/auth", authRoute);




app.post("/api/upload", existingDataRoute);

app.post("/api/newData/part1", async (req, res) => {
  const data = req.body;
  try {
    const upload = await prisma.part1.create({
      data: data,
    });

    return res.json({message : "Data imported successfully"});
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({message : "Error importing data"});
  }
});

app.post("/api/newData/part2", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const upload = await prisma.part2.create({
      data: data,
    });
    return res.json({message : "Data imported successfully"});
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({message : "Error importing data"});
  }
});

app.post("/api/newData/part3", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const upload = await prisma.part3.create({
      data: data,
    });
    return res.json({message : "Data imported successfully"});
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({message : "Error importing data"});
  }
});

app.post("/api/newData/part4", async (req, res) => {
  try {
    const data = req.body;
    const upload = await prisma.part4.create({
      data: data,
    });
    return res.json({message : "Data imported successfully"});
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({message : "Error importing data"});
  }
});

app.post("/api/newData/part5", async (req, res) => {
  try {
    const data = req.body;
    const upload = await prisma.part5.create({
      data: data,
    });
    return res.json({message : "Data imported successfully"});
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({message : "Error importing data"});
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
