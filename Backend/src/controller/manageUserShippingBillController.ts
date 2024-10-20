import { prisma } from "..";

//? Assign new task to user
export const assignNewtask = async (req: any, res: any) => {
  // const {  totalShippingBill, userId } = req.body;
  const totalShippingBill = Number(req.body.totalShippingBill);
  const userId = Number(req.body.userId);

  try {
    const newTask = await prisma.manageUserShippingBill.create({
      data: {
        totalShippingBill,
        userId,
      },
    });
    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        currentShippingBillId: newTask.id,
      },
    });
    return res.status(200).json({
      message: "Task assigned successfully",
    });
  } catch (error) {
    return res.json({ message: "Please try again later" });
  }
};

//? get all shipping bill
export const getAllUsersShippingBill = async (req: any, res: any) => {
  try {
    const usersWithCurrentBill = await prisma.user.findMany({
      select: {
        id: true,
        contactPersonName: true,
        currentShippingBillId: true, // Select the current shipping bill ID
      },
    });
    const shippingBill = await prisma.manageUserShippingBill.findMany({
      where: {
        id: {
          in: usersWithCurrentBill.map((u) => u.currentShippingBillId), // Filter by current shipping bill ID
        },
      },
    });
    return res.status(200).json(shippingBill);
  } catch (error) {
    return res.json({ message: "Please try again later" });
  }
};
