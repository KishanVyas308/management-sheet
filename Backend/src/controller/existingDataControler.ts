import { prisma } from "..";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

export const uploadExecingData = async (req: any, res: any) => {
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

    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
};
