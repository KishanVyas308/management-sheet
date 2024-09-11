import { prisma } from "..";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function part1(req: any, res: any) {
  const data = req.body;
  try {
    const upload = await prisma.part1.create({
      data: data,
    });

    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}
export async function part2(req: any, res: any) {
  try {
    const data = req.body;
    console.log(data);
    const upload = await prisma.part2.create({
      data: data,
    });
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}
export async function part3(req: any, res: any) {
  try {
    const data = req.body;
    console.log(data);
    const upload = await prisma.part3.create({
      data: data,
    });
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}
export async function part4(req: any, res: any) {
  try {
    const data = req.body;
    const upload = await prisma.part4.create({
      data: data,
    });
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}
export async function part5(req: any, res: any) {
  try {
    const data = req.body;
    const upload = await prisma.part5.create({
      data: data,
    });
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}
