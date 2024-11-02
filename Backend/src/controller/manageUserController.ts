import { prisma } from "..";

export const getAllUsers = async (req: any, res: any) => {
  try {
    const users = await prisma.user.findMany();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving users" });
  }
};

export const getUserCompletedDirectExports = async (req: any, res: any) => {
  try {
    const { userId } = req.params;

    const basicSheet = await prisma.basicSheet.findMany({
      where: {
        addedByUserId: userId,
      },
    });

    const Annexure1 = await prisma.annexure1.findMany({
      where: {
        addedByUserId: userId,
      },
    });

    const AnnexureA = await prisma.annexureA.findMany({
      where: {
        addedByUserId: userId,
      },
    });

    const directExports = basicSheet.map((_, index) => ({
      basicSheet: basicSheet[index],
      Annexure1: Annexure1[index],
      AnnexureA: AnnexureA[index],
    }));

    return res.status(200).json(directExports);
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving direct exports" });
  }
};

// get user completed shipping bill
export const getUserCompletedShippingBill = async (req: any, res: any) => {
  try {
    const { userId } = req.params;

    const part1section1 = await prisma.part1Section1.findMany({
      where: {
        addedByUserId: userId,
      },
    });

    const part1section2 = await prisma.part1Section2.findMany({
      where: {
        addedByUserId: userId,
      },
    });

    const part1section3 = await prisma.part1Section3.findMany({
      where: {
        addedByUserId: userId,
      },
    });

    const part2section1 = await prisma.part2Section1.findMany({
      where: {
        addedByUserId: userId,
      },
    });

    const part2section2 = await prisma.part2Section2.findMany({
      where: {
        addedByUserId: userId,
      },
    });

    const part2section3 = await prisma.part2Section3.findMany({
      where: {
        addedByUserId: userId,
      },
    });

    const part3section1 = await prisma.part3Section1.findMany({
      where: {
        addedByUserId: userId,
      },
    });

    const part3section2 = await prisma.part3Section2.findMany({
      where: {
        addedByUserId: userId,
      },
    });

    const part3section3 = await prisma.part3Section3.findMany({
      where: {
        addedByUserId: userId,
      },
    });

    const part4section1 = await prisma.part4Section1.findMany({
      where: {
        addedByUserId: userId,
      },
    });

    const part4section2 = await prisma.part4Section2.findMany({
      where: {
        addedByUserId: userId,
      },
    });

    const part4section3 = await prisma.part4Section3.findMany({
      where: {
        addedByUserId: userId,
      },
    });

    const part4section4 = await prisma.part4Section4.findMany({
      where: {
        addedByUserId: userId,
      },
    });

    const part4section5 = await prisma.part4Section5.findMany({
      where: {
        addedByUserId: userId,
      },
    });

    const part4section6 = await prisma.part4Section6.findMany({
      where: {
        addedByUserId: userId,
      },
    });

    const part5 = await prisma.part5.findMany({
      where: {
        addedByUserId: userId,
      },
    });

    const shippingBill = part1section1.map((_, index) => ({
      part1section1: part1section1[index] || null,
      part1section2: part1section2[index] || null,
      part1section3: part1section3[index] || null,
      part2section1: part2section1[index] || null,
      part2section2: part2section2[index] || null,
      part2section3: part2section3[index] || null,
      part3section1: part3section1[index] || null,
      part3section2: part3section2[index] || null,
      part3section3: part3section3[index] || null,
      part4section1: part4section1[index] || null,
      part4section2: part4section2[index] || null,
      part4section3: part4section3[index] || null,
      part4section4: part4section4[index] || null,
      part4section5: part4section5[index] || null,
      part4section6: part4section6[index] || null,
      part5: part5[index] || null,
    }));

    return res.status(200).json(shippingBill);
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving shipping bill" });
  }
};
