import { prisma } from "..";

export async function addIndirectExportBasicSheet(data: any) {
  try {
    const { basicSheet, addedByUserId } = data;
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
      exchangeRate,
      cifValue2,
      freight2,
      insurance2,
      brc2,
      exchangeRate2,
      invoiceNo,
      invoiceDate,
      basicAmount,
      invoiceValue,
      bankPaymentReceivedDate,
      amountReceived,
      amountRealised,
      qtyAsPerInvoiceAndSbMatch,
      epcgLicNoInTaxInvoice,
      lorryReceiptOrEwayBill,
      bankStatement,
      product,
      remarks,
    } = basicSheet;

    await prisma.indirectExportBasicSheet.create({
      data: {
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
        exchangeRate,
        cifValue2,
        freight2,
        insurance2,
        brc2,
        exchangeRate2,
        invoiceNo,
        invoiceDate,
        basicAmount,
        invoiceValue,
        bankPaymentReceivedDate,
        amountReceived,
        amountRealised,
        qtyAsPerInvoiceAndSbMatch,
        epcgLicNoInTaxInvoice,
        lorryReceiptOrEwayBill,
        bankStatement,
        product,
        remarks,
        addedByUserId,
      },
    });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function addIndirectExportAnnexure1(data: any) {
  try {
    const { annexure1, addedByUserId } = data;
    const {
      srNo,
      shippingBillNo,
      shippingBillDate,
      shippingBillCifValue,
      brcValue,
      lowerOfSbAndBrc,
      shippingBillFreight,
      shippingBillInsurance,
      fobValueInDollars,
      exchangeRatePerShippingBill,
      fobValueInRupees,
    } = annexure1;

    await prisma.indirectExportAnneuxure1.create({
      data: {
        srNo,
        shippingBillNo,
        shippingBillDate,
        shippingBillCifValue,
        brcValue,
        lowerOfSbAndBrc,
        shippingBillFreight,
        shippingBillInsurance,
        fobValueInDollars,
        exchangeRatePerShippingBill,
        fobValueInRupees,
        addedByUserId,
      },
    });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function addIndirectExportAnnexure2(data: any) {
  try {
    const { annexure2, addedByUserId } = data;
    const {
      srNo,
      shippingBillNo,
      shippingBillDate,
      taxInvoiceBillNo,
      taxInvoiceDate,
      taxInvoiceBasicAmount,
      taxInvoiceTax,
      taxInvoiceInvoiceValue,
      paymentDetailsDate,
      paymentDetailsAmountReceived,
      paymentDetailsAmountRealised,
      lowerOfInvoiceAndBankStatement,
      proportionateAmountOf6ForInRs,
      exchangeRatePerShippingBill,
      forInUsd,
    } = annexure2;

    await prisma.indirectExportAnneuxure2.create({
      data: {
        srNo,
        shippingBillNo,
        shippingBillDate,
        taxInvoiceBillNo,
        taxInvoiceDate,
        taxInvoiceBasicAmount,
        taxInvoiceTax,
        taxInvoiceInvoiceValue,
        paymentDetailsDate,
        paymentDetailsAmountReceived,
        paymentDetailsAmountRealised,
        lowerOfInvoiceAndBankStatement,
        proportionateAmountOf6ForInRs,
        exchangeRatePerShippingBill,
        forInUsd,
        addedByUserId,
      },
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function addIndirectExportCalculationSheet(data : any) {
  try {
    const { calculationSheet, addedByUserId } = data;
    const {
      srNo,
      sameProductOrService,
      alternativeProductOrService,
      shippingBillNo,
      shippingBillDate,
      fobValueRealizationProceedsRs,
      fobValueRealizationProceedsUs,
      fobValueAnnexure1Rs,
      fobValueAnnexure1Us,
      fobValueAnnexure2Rs,
      fobValueAnnexure2Us,
      fobValueLowerOf5_6_7Rs,
      fobValueLowerOf5_6_7Us,
    } = calculationSheet;

    await prisma.indirectExportCalculationSheet.create({
      data: {
        srNo,
        sameProductOrService,
        alternativeProductOrService,
        shippingBillNo,
        shippingBillDate,
        fobValueRealizationProceedsRs,
        fobValueRealizationProceedsUs,
        fobValueAnnexure1Rs,
        fobValueAnnexure1Us,
        fobValueAnnexure2Rs,
        fobValueAnnexure2Us,
        fobValueLowerOf5_6_7Rs,
        fobValueLowerOf5_6_7Us,
        addedByUserId,
      },
    });

    return true;
  } catch (error) {
    console.log(error);
    return false
  }
}

export async function addIndirectExportNewDeptSheet(data: any) {
  try {
    const { newDeptSheet, addedByUserId } = data
    const {
      srNo,
      shippingBillNo,
      shippingBillDate,
      invoiceNo,
      invoiceDate,
      amountRealisedAsPerBrcUs,
      amountRealisedAsPerBrcExchRate,
      amountRealisedAsPerBrcRs,
      amountRealisedInBankRs,
      amountLessOfCol6And7Rs,
      convertedIntoUsd,
    } = newDeptSheet;

    await prisma.indirectExportNewDeptSheet.create({
      data: {
        srNo,
        shippingBillNo,
        shippingBillDate,
        invoiceNo,
        invoiceDate,
        amountRealisedAsPerBrcUs,
        amountRealisedAsPerBrcExchRate,
        amountRealisedAsPerBrcRs,
        amountRealisedInBankRs,
        amountLessOfCol6And7Rs,
        convertedIntoUsd,
        addedByUserId,
      },
    });

    return true
  } catch (error) {
    console.log(error);
    return false
  }
}

export async function addIndirectExportAnnexureA(data : any) {
  try {
    const { annexureA, addedByUserId } = data
    const {
      srNo,
      sameProductOrService,
      shippingBillNo,
      shippingBillDate,
      directExportsRs,
      directExportsUs,
      deemedExports,
      thirdPartyExportsRs,
      thirdPartyExportsUs,
      byGroupCompany,
      otherRnDServicesOrRoyalty,
      totalRs,
      totalUs,
    } = annexureA;

    await prisma.indirectExportAnneuxureA.create({
      data: {
        srNo,
        sameProductOrService,
        shippingBillNo,
        shippingBillDate,
        directExportsRs,
        directExportsUs,
        deemedExports,
        thirdPartyExportsRs,
        thirdPartyExportsUs,
        byGroupCompany,
        otherRnDServicesOrRoyalty,
        totalRs,
        totalUs,
        addedByUserId,
      },
    });

    return true
  } catch (error) {
    console.log(error);
    return false
  }
}
export async function addAllIndirectExportData(req: any, res: any) {
  try {

    const data = req.body;
    
    const isAdded1 =  await addIndirectExportBasicSheet(data);
    const isAdded2 = await addIndirectExportAnnexure1(data);
    const isAdded3 = await addIndirectExportAnnexure2(data);
    const isAdded4 = await addIndirectExportCalculationSheet(data);
    const isAdded5 = await addIndirectExportNewDeptSheet(data);
    const isAdded6 = await addIndirectExportAnnexureA(data);

    if(!isAdded1 || !isAdded2 || !isAdded3 || !isAdded4 || !isAdded5 || !isAdded6) {
      return res.status(500).json({ message: "Error adding all indirect export data" });
    }
    return res.status(200).json({ message: "Added all data successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Error adding all indirect export data" });
  }
}
