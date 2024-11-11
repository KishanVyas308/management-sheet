"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addIndirectExportBasicSheet = addIndirectExportBasicSheet;
exports.addIndirectExportAnnexure1 = addIndirectExportAnnexure1;
exports.addIndirectExportAnnexure2 = addIndirectExportAnnexure2;
exports.addIndirectExportCalculationSheet = addIndirectExportCalculationSheet;
exports.addIndirectExportNewDeptSheet = addIndirectExportNewDeptSheet;
exports.addIndirectExportAnnexureA = addIndirectExportAnnexureA;
exports.addAllIndirectExportData = addAllIndirectExportData;
const __1 = require("..");
function addIndirectExportBasicSheet(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { basicSheet, addedByUserId } = data;
            const { companyName, srNo, shippingBillNo, shippingBillDate, thirdPartyExporter, hsCodeAndDescription, epcgLicNo, cifValue, freight, insurance, brc, exchangeRate, cifValue2, freight2, insurance2, brc2, exchangeRate2, invoiceNo, invoiceDate, basicAmount, invoiceValue, bankPaymentReceivedDate, amountReceived, amountRealised, qtyAsPerInvoiceAndSbMatch, epcgLicNoInTaxInvoice, lorryReceiptOrEwayBill, bankStatement, product, remarks, } = basicSheet;
            yield __1.prisma.indirectExportBasicSheet.create({
                data: {
                    companyName: companyName.toString(),
                    srNo: srNo.toString(),
                    shippingBillNo: shippingBillNo.toString(),
                    shippingBillDate: shippingBillDate.toString(),
                    thirdPartyExporter: thirdPartyExporter.toString(),
                    hsCodeAndDescription: hsCodeAndDescription.toString(),
                    epcgLicNo: epcgLicNo.toString(),
                    cifValue: cifValue.toString(),
                    freight: freight.toString(),
                    insurance: insurance.toString(),
                    brc: brc.toString(),
                    exchangeRate: exchangeRate.toString(),
                    cifValue2: cifValue2.toString(),
                    freight2: freight2.toString(),
                    insurance2: insurance2.toString(),
                    brc2: brc2.toString(),
                    exchangeRate2: exchangeRate2.toString(),
                    invoiceNo: invoiceNo.toString(),
                    invoiceDate: invoiceDate.toString(),
                    basicAmount: basicAmount.toString(),
                    invoiceValue: invoiceValue.toString(),
                    bankPaymentReceivedDate: bankPaymentReceivedDate.toString(),
                    amountReceived: amountReceived.toString(),
                    amountRealised: amountRealised.toString(),
                    qtyAsPerInvoiceAndSbMatch: qtyAsPerInvoiceAndSbMatch.toString(),
                    epcgLicNoInTaxInvoice: epcgLicNoInTaxInvoice.toString(),
                    lorryReceiptOrEwayBill: lorryReceiptOrEwayBill.toString(),
                    bankStatement: bankStatement.toString(),
                    product: product.toString(),
                    remarks: remarks.toString(),
                    addedByUserId: addedByUserId.toString(),
                },
            });
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    });
}
function addIndirectExportAnnexure1(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { annexure1, addedByUserId } = data;
            const { srNo, shippingBillNo, shippingBillDate, shippingBillCifValue, brcValue, lowerOfSbAndBrc, shippingBillFreight, shippingBillInsurance, fobValueInDollars, exchangeRatePerShippingBill, fobValueInRupees, } = annexure1;
            yield __1.prisma.indirectExportAnneuxure1.create({
                data: {
                    srNo: srNo.toString(),
                    shippingBillNo: shippingBillNo.toString(),
                    shippingBillDate: shippingBillDate.toString(),
                    shippingBillCifValue: shippingBillCifValue.toString(),
                    brcValue: brcValue.toString(),
                    lowerOfSbAndBrc: lowerOfSbAndBrc.toString(),
                    shippingBillFreight: shippingBillFreight.toString(),
                    shippingBillInsurance: shippingBillInsurance.toString(),
                    fobValueInDollars: fobValueInDollars.toString(),
                    exchangeRatePerShippingBill: exchangeRatePerShippingBill.toString(),
                    fobValueInRupees: fobValueInRupees.toString(),
                    addedByUserId: addedByUserId.toString(),
                },
            });
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    });
}
function addIndirectExportAnnexure2(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { annexure2, addedByUserId } = data;
            const { srNo, shippingBillNo, shippingBillDate, taxInvoiceBillNo, taxInvoiceDate, taxInvoiceBasicAmount, taxInvoiceTax, taxInvoiceInvoiceValue, paymentDetailsDate, paymentDetailsAmountReceived, paymentDetailsAmountRealised, lowerOfInvoiceAndBankStatement, proportionateAmountOf6ForInRs, exchangeRatePerShippingBill, forInUsd, } = annexure2;
            yield __1.prisma.indirectExportAnneuxure2.create({
                data: {
                    srNo: srNo.toString(),
                    shippingBillNo: shippingBillNo.toString(),
                    shippingBillDate: shippingBillDate.toString(),
                    taxInvoiceBillNo: taxInvoiceBillNo.toString(),
                    taxInvoiceDate: taxInvoiceDate.toString(),
                    taxInvoiceBasicAmount: taxInvoiceBasicAmount.toString(),
                    taxInvoiceTax: taxInvoiceTax.toString(),
                    taxInvoiceInvoiceValue: taxInvoiceInvoiceValue.toString(),
                    paymentDetailsDate: paymentDetailsDate.toString(),
                    paymentDetailsAmountReceived: paymentDetailsAmountReceived.toString(),
                    paymentDetailsAmountRealised: paymentDetailsAmountRealised.toString(),
                    lowerOfInvoiceAndBankStatement: lowerOfInvoiceAndBankStatement.toString(),
                    proportionateAmountOf6ForInRs: proportionateAmountOf6ForInRs.toString(),
                    exchangeRatePerShippingBill: exchangeRatePerShippingBill.toString(),
                    forInUsd: forInUsd.toString(),
                    addedByUserId: addedByUserId.toString(),
                },
            });
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    });
}
function addIndirectExportCalculationSheet(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { calculationSheet, addedByUserId } = data;
            const { srNo, sameProductOrService, alternativeProductOrService, shippingBillNo, shippingBillDate, fobValueRealizationProceedsRs, fobValueRealizationProceedsUs, fobValueAnnexure1Rs, fobValueAnnexure1Us, fobValueAnnexure2Rs, fobValueAnnexure2Us, fobValueLowerOf5_6_7Rs, fobValueLowerOf5_6_7Us, } = calculationSheet;
            yield __1.prisma.indirectExportCalculationSheet.create({
                data: {
                    srNo: srNo.toString(),
                    sameProductOrService: sameProductOrService.toString(),
                    alternativeProductOrService: alternativeProductOrService.toString(),
                    shippingBillNo: shippingBillNo.toString(),
                    shippingBillDate: shippingBillDate.toString(),
                    fobValueRealizationProceedsRs: fobValueRealizationProceedsRs.toString(),
                    fobValueRealizationProceedsUs: fobValueRealizationProceedsUs.toString(),
                    fobValueAnnexure1Rs: fobValueAnnexure1Rs.toString(),
                    fobValueAnnexure1Us: fobValueAnnexure1Us.toString(),
                    fobValueAnnexure2Rs: fobValueAnnexure2Rs.toString(),
                    fobValueAnnexure2Us: fobValueAnnexure2Us.toString(),
                    fobValueLowerOf5_6_7Rs: fobValueLowerOf5_6_7Rs.toString(),
                    fobValueLowerOf5_6_7Us: fobValueLowerOf5_6_7Us.toString(),
                    addedByUserId: addedByUserId.toString(),
                },
            });
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    });
}
function addIndirectExportNewDeptSheet(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { newDeptSheet, addedByUserId } = data;
            const { srNo, shippingBillNo, shippingBillDate, invoiceNo, invoiceDate, amountRealisedAsPerBrcUs, amountRealisedAsPerBrcExchRate, amountRealisedAsPerBrcRs, amountRealisedInBankRs, amountLessOfCol6And7Rs, convertedIntoUsd, } = newDeptSheet;
            yield __1.prisma.indirectExportNewDeptSheet.create({
                data: {
                    srNo: srNo.toString(),
                    shippingBillNo: shippingBillNo.toString(),
                    shippingBillDate: shippingBillDate.toString(),
                    invoiceNo: invoiceNo.toString(),
                    invoiceDate: invoiceDate.toString(),
                    amountRealisedAsPerBrcUs: amountRealisedAsPerBrcUs.toString(),
                    amountRealisedAsPerBrcExchRate: amountRealisedAsPerBrcExchRate.toString(),
                    amountRealisedAsPerBrcRs: amountRealisedAsPerBrcRs.toString(),
                    amountRealisedInBankRs: amountRealisedInBankRs.toString(),
                    amountLessOfCol6And7Rs: amountLessOfCol6And7Rs.toString(),
                    convertedIntoUsd: convertedIntoUsd.toString(),
                    addedByUserId: addedByUserId.toString(),
                },
            });
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    });
}
function addIndirectExportAnnexureA(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { annexureA, addedByUserId } = data;
            const { srNo, sameProductOrService, shippingBillNo, shippingBillDate, directExportsRs, directExportsUs, deemedExports, thirdPartyExportsRs, thirdPartyExportsUs, byGroupCompany, otherRnDServicesOrRoyalty, totalRs, totalUs, } = annexureA;
            yield __1.prisma.indirectExportAnneuxureA.create({
                data: {
                    srNo: srNo.toString(),
                    sameProductOrService: sameProductOrService.toString(),
                    shippingBillNo: shippingBillNo.toString(),
                    shippingBillDate: shippingBillDate.toString(),
                    directExportsRs: directExportsRs.toString(),
                    directExportsUs: directExportsUs.toString(),
                    deemedExports: deemedExports.toString(),
                    thirdPartyExportsRs: thirdPartyExportsRs.toString(),
                    thirdPartyExportsUs: thirdPartyExportsUs.toString(),
                    byGroupCompany: byGroupCompany.toString(),
                    otherRnDServicesOrRoyalty: otherRnDServicesOrRoyalty.toString(),
                    totalRs: totalRs.toString(),
                    totalUs: totalUs.toString(),
                    addedByUserId: addedByUserId.toString(),
                },
            });
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    });
}
function addAllIndirectExportData(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const isAdded1 = yield addIndirectExportBasicSheet(data);
            const isAdded2 = yield addIndirectExportAnnexure1(data);
            const isAdded3 = yield addIndirectExportAnnexure2(data);
            const isAdded4 = yield addIndirectExportCalculationSheet(data);
            const isAdded5 = yield addIndirectExportNewDeptSheet(data);
            const isAdded6 = yield addIndirectExportAnnexureA(data);
            if (!isAdded1 || !isAdded2 || !isAdded3 || !isAdded4 || !isAdded5 || !isAdded6) {
                return res.status(500).json({ message: "Error adding all indirect export data" });
            }
            return res.status(200).json({ message: "Added all data successfully" });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Error adding all indirect export data" });
        }
    });
}
