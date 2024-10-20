import { prisma } from "..";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function part1section1(req: any, res: any) {
  const data = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: data.addedByUserId,
      },
      select: {
        currentShippingBillId: true,
      },
    });

    const upload = await prisma.part1Section1.create({
      data: data,
    });
    if (user && user.currentShippingBillId != "") {
      const updateManageUserShippingBill =
        await prisma.manageUserShippingBill.update({
          where: {
            id: user.currentShippingBillId,
          },
          data: {
            isPart1Section1Completed: true,
            currentExportersName: data.exportersName,
          },
        });
      checkIfAllTaskTakCompleted(updateManageUserShippingBill);
    }

    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}

export async function part1section2(req: any, res: any) {
  const data = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: data.addedByUserId,
      },
      select: {
        currentShippingBillId: true,
      },
    });

    const upload = await prisma.part1Section2.create({
      data: data,
    });
    if (user && user.currentShippingBillId != "") {
      const updateManageUserShippingBill =
        await prisma.manageUserShippingBill.update({
          where: {
            id: user.currentShippingBillId,
          },
          data: {
            isPart1Section2Completed: true,
          },
        });
      checkIfAllTaskTakCompleted(updateManageUserShippingBill);
    }

    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}

export async function part1section3(req: any, res: any) {
  const data = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: data.addedByUserId,
      },
      select: {
        currentShippingBillId: true,
      },
    });
    const upload = await prisma.part1Section3.create({
      data: data,
    });
    if (user && user.currentShippingBillId != "") {
      const updateManageUserShippingBill =
        await prisma.manageUserShippingBill.update({
          where: {
            id: user.currentShippingBillId,
          },
          data: {
            isPart1Section3Completed: true,
          },
        });
      checkIfAllTaskTakCompleted(updateManageUserShippingBill);
    }

    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}

export async function part2section1(req: any, res: any) {
  try {
    const data = req.body;
    const user = await prisma.user.findUnique({
      where: {
        id: data.addedByUserId,
      },
      select: {
        currentShippingBillId: true,
      },
    });
    const upload = await prisma.part2Section1.create({
      data: data,
    });
    if (user && user.currentShippingBillId != "") {
      const updateManageUserShippingBill =
        await prisma.manageUserShippingBill.update({
          where: {
            id: user.currentShippingBillId,
          },
          data: {
            isPart2Section1Completed: true,
          },
        });
      checkIfAllTaskTakCompleted(updateManageUserShippingBill);
    }
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}

export async function part2section2(req: any, res: any) {
  try {
    const data = req.body;
    const user = await prisma.user.findUnique({
      where: {
        id: data.addedByUserId,
      },
      select: {
        currentShippingBillId: true,
      },
    });
    const upload = await prisma.part2Section2.create({
      data: data,
    });
    if (user && user.currentShippingBillId != "") {
      const updateManageUserShippingBill =
        await prisma.manageUserShippingBill.update({
          where: {
            id: user.currentShippingBillId,
          },
          data: {
            isPart2Section2Completed: true,
          },
        });
      checkIfAllTaskTakCompleted(updateManageUserShippingBill);
    }
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}

export async function part2section3(req: any, res: any) {
  try {
    const data = req.body;

    const user = await prisma.user.findUnique({
      where: {
        id: data.addedByUserId,
      },
      select: {
        currentShippingBillId: true,
      },
    });

    const upload = await prisma.part2Section3.create({
      data: data,
    });
    if (user && user.currentShippingBillId != "") {
      const updateManageUserShippingBill =
        await prisma.manageUserShippingBill.update({
          where: {
            id: user.currentShippingBillId,
          },
          data: {
            isPart2Section3Completed: true,
          },
        });
      checkIfAllTaskTakCompleted(updateManageUserShippingBill);
    }
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}

export async function part3section1(req: any, res: any) {
  try {
    const data = req.body;

    const user = await prisma.user.findUnique({
      where: {
        id: data.addedByUserId,
      },
      select: {
        currentShippingBillId: true,
      },
    });

    const upload = await prisma.part3Section1.create({
      data: data,
    });
    if (user && user.currentShippingBillId != "") {
      const updateManageUserShippingBill =
        await prisma.manageUserShippingBill.update({
          where: {
            id: user.currentShippingBillId,
          },
          data: {
            isPart3Section1Completed: true,
          },
        });
      checkIfAllTaskTakCompleted(updateManageUserShippingBill);
    }
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}

export async function part3section2(req: any, res: any) {
  try {
    const data = req.body;

    const user = await prisma.user.findUnique({
      where: {
        id: data.addedByUserId,
      },
      select: {
        currentShippingBillId: true,
      },
    });

    const upload = await prisma.part3Section2.create({
      data: data,
    });
    if (user && user.currentShippingBillId != "") {
      const updateManageUserShippingBill =
        await prisma.manageUserShippingBill.update({
          where: {
            id: user.currentShippingBillId,
          },
          data: {
            isPart3Section2Completed: true,
          },
        });
      checkIfAllTaskTakCompleted(updateManageUserShippingBill);
    }
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}

export async function part3section3(req: any, res: any) {
  try {
    const data = req.body;

    const user = await prisma.user.findUnique({
      where: {
        id: data.addedByUserId,
      },
      select: {
        currentShippingBillId: true,
      },
    });

    const upload = await prisma.part3Section3.create({
      data: data,
    });
    if (user && user.currentShippingBillId != "") {
      const updateManageUserShippingBill =
        await prisma.manageUserShippingBill.update({
          where: {
            id: user.currentShippingBillId,
          },
          data: {
            isPart3Section3Completed: true,
          },
        });
      checkIfAllTaskTakCompleted(updateManageUserShippingBill);
    }
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}

export async function part4section1(req: any, res: any) {
  try {
    const data = req.body;
    const user = await prisma.user.findUnique({
      where: {
        id: data.addedByUserId,
      },
      select: {
        currentShippingBillId: true,
      },
    });
    const upload = await prisma.part4Section1.create({
      data: data,
    });
    if (user && user.currentShippingBillId != "") {
      const updateManageUserShippingBill =
        await prisma.manageUserShippingBill.update({
          where: {
            id: user.currentShippingBillId,
          },
          data: {
            isPart4Section1Completed: true,
          },
        });
      checkIfAllTaskTakCompleted(updateManageUserShippingBill);
    }
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}

export async function part4section2(req: any, res: any) {
  try {
    const data = req.body;
    const user = await prisma.user.findUnique({
      where: {
        id: data.addedByUserId,
      },
      select: {
        currentShippingBillId: true,
      },
    });
    const upload = await prisma.part4Section2.create({
      data: data,
    });
    if (user && user.currentShippingBillId != "") {
      const updateManageUserShippingBill =
        await prisma.manageUserShippingBill.update({
          where: {
            id: user.currentShippingBillId,
          },
          data: {
            isPart4Section2Completed: true,
          },
        });
      checkIfAllTaskTakCompleted(updateManageUserShippingBill);
    }
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}

export async function part4section3(req: any, res: any) {
  try {
    const data = req.body;
    const user = await prisma.user.findUnique({
      where: {
        id: data.addedByUserId,
      },
      select: {
        currentShippingBillId: true,
      },
    });
    const upload = await prisma.part4Section3.create({
      data: data,
    });
    if (user && user.currentShippingBillId != "") {
      const updateManageUserShippingBill =
        await prisma.manageUserShippingBill.update({
          where: {
            id: user.currentShippingBillId,
          },
          data: {
            isPart4Section3Completed: true,
          },
        });
      checkIfAllTaskTakCompleted(updateManageUserShippingBill);
    }
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}

export async function part4section4(req: any, res: any) {
  try {
    const data = req.body;
    const user = await prisma.user.findUnique({
      where: {
        id: data.addedByUserId,
      },
      select: {
        currentShippingBillId: true,
      },
    });
    const upload = await prisma.part4Section4.create({
      data: data,
    });
    if (user && user.currentShippingBillId != "") {
      const updateManageUserShippingBill =
        await prisma.manageUserShippingBill.update({
          where: {
            id: user.currentShippingBillId,
          },
          data: {
            isPart4Section4Completed: true,
          },
        });
      checkIfAllTaskTakCompleted(updateManageUserShippingBill);
    }
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}

export async function part4section5(req: any, res: any) {
  try {
    const data = req.body;
    const user = await prisma.user.findUnique({
      where: {
        id: data.addedByUserId,
      },
      select: {
        currentShippingBillId: true,
      },
    });
    const upload = await prisma.part4Section5.create({
      data: data,
    });
    if (user && user.currentShippingBillId != "") {
      const updateManageUserShippingBill =
        await prisma.manageUserShippingBill.update({
          where: {
            id: user.currentShippingBillId,
          },
          data: {
            isPart4Section5Completed: true,
          },
        });
      checkIfAllTaskTakCompleted(updateManageUserShippingBill);
    }
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}

export async function part4section6(req: any, res: any) {
  try {
    const data = req.body;
    const user = await prisma.user.findUnique({
      where: {
        id: data.addedByUserId,
      },
      select: {
        currentShippingBillId: true,
      },
    });
    const upload = await prisma.part4Section6.create({
      data: data,
    });
    if (user && user.currentShippingBillId != "") {
      const updateManageUserShippingBill =
        await prisma.manageUserShippingBill.update({
          where: {
            id: user.currentShippingBillId,
          },
          data: {
            isPart4Section6Completed: true,
          },
        });
      checkIfAllTaskTakCompleted(updateManageUserShippingBill);
    }
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}

export async function part5(req: any, res: any) {
  try {
    const data = req.body;
    const user = await prisma.user.findUnique({
      where: {
        id: data.addedByUserId,
      },
      select: {
        currentShippingBillId: true,
      },
    });
    const upload = await prisma.part5.create({
      data: data,
    });
    if (user && user.currentShippingBillId != "") {
      const updateManageUserShippingBill =
        await prisma.manageUserShippingBill.update({
          where: {
            id: user.currentShippingBillId,
          },
          data: {
            isPart5Completed: true,
          },
        });
      checkIfAllTaskTakCompleted(updateManageUserShippingBill);
    }
    return res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    return res.json({ message: "Error importing data" });
  }
}

async function checkIfAllTaskTakCompleted(shippingBill: any) {
  if (
    shippingBill.isPart1Section1Completed &&
    shippingBill.isPart1Section2Completed &&
    shippingBill.isPart1Section3Completed &&
    shippingBill.isPart2Section1Completed &&
    shippingBill.isPart2Section2Completed &&
    shippingBill.isPart2Section3Completed &&
    shippingBill.isPart3Section1Completed &&
    shippingBill.isPart3Section2Completed &&
    shippingBill.isPart3Section3Completed &&
    shippingBill.isPart4Section1Completed &&
    shippingBill.isPart4Section2Completed &&
    shippingBill.isPart4Section3Completed &&
    shippingBill.isPart4Section4Completed &&
    shippingBill.isPart4Section5Completed &&
    shippingBill.isPart4Section6Completed &&
    shippingBill.isPart5Completed
  ) {
    if (shippingBill.completedShippingBill < shippingBill.totalShippingBill) {
      const updatedShippingBill = await prisma.manageUserShippingBill.update({
        where: {
          id: shippingBill.id,
        },
        data: {
          completedShippingBill: shippingBill.completedShippingBill + 1,
          isPart1Section1Completed: false,
          isPart1Section2Completed: false,
          isPart1Section3Completed: false,
          isPart2Section1Completed: false,
          isPart2Section2Completed: false,
          isPart2Section3Completed: false,
          isPart3Section1Completed: false,
          isPart3Section2Completed: false,
          isPart3Section3Completed: false,
          isPart4Section1Completed: false,
          isPart4Section2Completed: false,
          isPart4Section3Completed: false,
          isPart4Section4Completed: false,
          isPart4Section5Completed: false,
          isPart4Section6Completed: false,
          isPart5Completed: false,
        },
      });
    }
  }
}
