import express from "express";
import multer from "multer";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import authRoute from "./router/authRouter";

const app = express();
const upload = multer({ dest: "uploads/" });
export const prisma = new PrismaClient();

interface DataInterface {
  A?: string;
  B?: string;
  C?: string;
  D?: string;
  E?: string;
  F?: string;
  G?: string;
  H?: string;
  I?: string;
  J?: string;
  K?: string;
  L?: string;
  M?: string;
  N?: string;
  O?: string;
  P?: string;
  Q?: string;
  R?: string;
}

app.use(express.json());
app.use(cors());


app.get("/api", (req, res) => {
  return res.send("Hello from Kishan Vyas");
});




// signin api
app.use("/api/v1/auth", authRoute);



app.post("/api/upload", upload.single("file"), async (req, res) => {
  try {
    const { sheetJsonData, companyName } = req.body;

    // Parse the sheetJsonData from the request
    const parsedData: DataInterface[] = JSON.parse(sheetJsonData);

    // Ensure companyName is a string
    if (typeof companyName !== "string" || !companyName) {
      return res.status(400).send("Invalid company name");
    }

    let emptyRowEncountered = false;
    const dataToInsertArray = []; 

    // Process each row in the parsed data
    for (const item of parsedData) {
      // Filter out rows that are completely empty
      const nonEmptyValues = Object.values(item).filter(
        (value) => value !== undefined && value !== null && value !== ""
      );

      // Skip empty rows
      if (nonEmptyValues.length === 0 || nonEmptyValues.length === 1) {
        emptyRowEncountered = true;
        break; // Exit loop on encountering an empty row
      }

      if (emptyRowEncountered) {
        break; // Stop processing further rows after an empty row
      }

      // Prepare the data object for Prisma
      const dataToInsert = {
        companyName: companyName,
        srNo: String(item.A ?? "0"),
        shippingBillNo: String(item.B ?? "0"),
        shippingBillDate: String(item.C ?? ""),
        thirdPartyExporter: String(item.D ?? ""),
        hsCodeAndDescription: String(item.E ?? ""),
        epcgLicNo: String(item.F ?? ""),
        cifValue: String(item.G ?? "0"),
        freight: String(item.H ?? "0"),
        insurance: String(item.I ?? "0"),
        brc: String(item.J ?? "0"),
        exchangeRate: String(item.K ?? "0"),
        cifValue2: String(item.L ?? "0"),
        freight2: String(item.M ?? "0"),
        insurance2: String(item.N ?? "0"),
        brc2: String(item.O ?? "0"),
        exchangeRate2: String(item.P ?? "0"),
        product: String(item.Q ?? ""),
        remarks: String(item.R ?? ""),
      };

      // Insert the row into the database
      dataToInsertArray.push(dataToInsert);
    }

    await prisma.excelDataFinal.createMany({
      data: dataToInsertArray,
    });

    return res.json({message : "Data imported successfully"});
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({message : "Error importing data"});
  }
});

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
