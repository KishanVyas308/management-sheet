import { prisma } from "..";

export const getAllExporters = async (req: any, res: any) => {
  const data = await prisma.client.findMany();
  res.json(data);
};
