import { prisma } from "..";
import bcrypt from "bcryptjs";

export const addNewUser = async (req: any, res: any) => {
  const {
    email,
    password,
    contactPersonName,
    companyName,
    addressLine1,
    addressLine2,
    city,
    state,
    country,
    pin,
    webpage,
    phoneNumber,
    gstNo,
    companyLogo,
    role,
  } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: await bcrypt.hash(password, 10),
        contactPersonName,
        companyName,
        addressLine1,
        addressLine2,
        city,
        state,
        country,
        pin,
        webpage,
        phoneNumber,
        gstNo,
        companyLogo,
        role,
      },
    });

    return res.status(200).json({
      message: "User added successfully",
    });
  } catch (error) {
    return res.json({ message: "Please try again later" + error });
  }
};

export const addNewExpoter = async (req: any, res: any) => {
const {
  exporterName,
  exporterAddress,
  type,
  adCode,
  cbName,
  forexBankAc,
  dbkBankAcNo,
  addedByUserId,
} = req.body;

console.log(req.body);

let allforexBankAc = forexBankAc.join(',');
let alldbkBankAcNo = dbkBankAcNo.join(',');

try {
  const exporter = await prisma.exporter.create({
    data: {
      exporterName,
      exporterAddress,
      type,
      adCode,
      cbName,
      forexBankAc : allforexBankAc,
      dbkBankAcNo : alldbkBankAcNo,
      addedByUserId,
    },
  });

  return res.status(200).json({
    message: "Exporter added successfully",
  });
} catch (error) {
  return res.json({ message: "Please try again later" + error });
}
}