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
            return res
                .status(500)
                .json({ message: "Error adding all indirect export data" });
        }
    });
}
