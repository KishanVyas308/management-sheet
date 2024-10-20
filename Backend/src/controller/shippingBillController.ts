import { prisma } from "..";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function part1section1(req: any, res: any) {
  const data = req.body;
  try {
    const upload = await prisma.part1Section1.create({
      data: data,
    });

    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}
export async function part1section2(req: any, res: any) {
  const data = req.body;
  try {
    const upload = await prisma.part1Section2.create({
      data: data,
    });

    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}
export async function part1section3(req: any, res: any) {
  const data = req.body;
  try {
    const upload = await prisma.part1Section3.create({
      data: data,
    });

    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}

export async function part2section1(req: any, res: any) {
  try {
    const data = req.body;
    console.log(data);
    const upload = await prisma.part2Section1.create({
      data: data,
    });
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}
export async function part2section2(req: any, res: any) {
  try {
    const data = req.body;
    console.log(data);
    const upload = await prisma.part2Section2.create({
      data: data,
    });
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}
export async function part2section3(req: any, res: any) {
  try {
    const data = req.body;
    console.log(data);
    const upload = await prisma.part2Section3.create({
      data: data,
    });
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}

export async function part3section1(req: any, res: any) {
  try {
    const data = req.body;
    console.log(data);
    const upload = await prisma.part3Section1.create({
      data: data,
    });
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}

export async function part3section2(req: any, res: any) {
  try {
    const data = req.body;
    console.log(data);
    const upload = await prisma.part3Section2.create({
      data: data,
    });
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}

export async function part3section3(req: any, res: any) {
  try {
    const data = req.body;
    console.log(data);
    const upload = await prisma.part3Section3.create({
      data: data,
    });
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}

export async function part4section1(req: any, res: any) {
  try {
    const data = req.body;
    const upload = await prisma.part4Section1.create({
      data: data,
    });
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}
export async function part4section2(req: any, res: any) {
  try {
    const data = req.body;
    const upload = await prisma.part4Section2.create({
      data: data,
    });
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}
export async function part4section3(req: any, res: any) {
  try {
    const data = req.body;
    const upload = await prisma.part4Section3.create({
      data: data,
    });
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}
export async function part4section4(req: any, res: any) {
  try {
    const data = req.body;
    const upload = await prisma.part4Section4.create({
      data: data,
    });
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}
export async function part4section5(req: any, res: any) {
  try {
    const data = req.body;
    const upload = await prisma.part4Section5.create({
      data: data,
    });
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}
export async function part4section6(req: any, res: any) {
  try {
    const data = req.body;
    const upload = await prisma.part4Section6.create({
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
