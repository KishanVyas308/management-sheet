import { prisma } from "..";


export const getAllUsers = async (req: any, res: any) => {
    try {
        const users = await prisma.user.findMany();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ message: "Error retrieving users" });
    }
};

