import { prisma } from "..";



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
