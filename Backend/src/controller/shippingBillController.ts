import { prisma } from "..";

export async function addBasicSheet(req: any, res: any) {
  try {
    const {
      companyName,
      srNo,
      shippingBillNo,
      shippingBillDate,
      thirdPartyExporter,
      hsCodeAndDescription,
      epcgLicNo,
      cifValue,
      freight,
      insurance,
      brc,
      exchangeRateOrProprtionRatio,
      exchangeRate,
      product,
      remarks,
    } = req.body;

    const basicSheet = await prisma.basicSheet.create({
      data: {
        companyName: companyName,
        srNo: srNo,
        shippingBillNo: shippingBillNo,
        shippingBillDate: shippingBillDate,
        thirdPartyExporter: thirdPartyExporter,
        hsCodeAndDescription: hsCodeAndDescription,
        epcgLicNo: epcgLicNo,
        cifValue: cifValue,
        freight: freight,
        insurance: insurance,
        brc: brc,
        exchangeRateOrProprtionRatio: exchangeRateOrProprtionRatio,
        cifValue2: (
          Number(cifValue) * Number(exchangeRateOrProprtionRatio)
        ).toString(),
        freight2: (
          Number(freight) * Number(exchangeRateOrProprtionRatio)
        ).toString(),
        insurance2: (
          Number(insurance) * Number(exchangeRateOrProprtionRatio)
        ).toString(),
        brc2: (Number(brc) * Number(exchangeRateOrProprtionRatio)).toString(),
        exchangeRate: exchangeRate,
        product: product,
        remarks: remarks,
      },
    });

    const shippingBillCifValueInDoller = (
      Number(cifValue) * Number(exchangeRateOrProprtionRatio)
    ).toString();
    const brcValue = (
      Number(brc) * Number(exchangeRateOrProprtionRatio)
    ).toString();
    const lowerOfSbAndBrc = Math.min(
      Number(cifValue) * Number(exchangeRateOrProprtionRatio),
      Number(brc) * Number(exchangeRateOrProprtionRatio)
    ).toString();

    const shippingBillFreight = (
      Number(freight) * Number(exchangeRateOrProprtionRatio)
    ).toString();

    const shippingBillInsurance = (
      Number(insurance) * Number(exchangeRateOrProprtionRatio)
    ).toString();
    const fobValueInDoller = (
      Number(lowerOfSbAndBrc) -
      (Number(shippingBillFreight) + Number(shippingBillInsurance))
    ).toString();
    const ExchangeRatePerShippingBill = exchangeRate;
    const fobValueInRupees = (
      (Number(lowerOfSbAndBrc) -
        (Number(shippingBillFreight) + Number(shippingBillInsurance))) *
      Number(ExchangeRatePerShippingBill)
    ).toString();

    const Annexure1 = await prisma.annexure1.create({
      data: {
        srNo: srNo,
        shippingBillNo: shippingBillNo,
        shippingBillDate: shippingBillDate,
        shippingBillCifValueInDoller: shippingBillCifValueInDoller,
        brcValue: brcValue,
        lowerOfSbAndBrc: lowerOfSbAndBrc,
        shippingBillFreight: shippingBillFreight,
        shippingBillInsurance: shippingBillInsurance,
        fobValueInDoller: fobValueInDoller,
        ExchangeRatePerShippingBill: ExchangeRatePerShippingBill,
        fobValueInRupees: fobValueInRupees,
      },
    });

    const AnnexureA = await prisma.annexureA.create({
      data: {
        srNo: srNo,
        productExportered: product,
        shippingBillNumber: shippingBillNo,
        shippingBillDate: shippingBillDate,
        directExportsInRupees: fobValueInRupees,
        directExportsInDollars: fobValueInDoller,
        deemedExports: "0",
        thirdPartyExportsInRupees: "0",
        thirdPartyExportsInDollars: "0",
        byGroupCompany: "0",
        otherRWseries: "0",
        totalInRupees: fobValueInRupees,
        totalInDollars: fobValueInDoller,
      },
    });

    return res.status(200).json({ message: "Added data successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error adding basic sheet" });
  }
}
