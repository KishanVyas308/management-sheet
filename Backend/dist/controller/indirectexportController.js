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
                    companyName: (companyName === null || companyName === void 0 ? void 0 : companyName.toString()) || "",
                    srNo: (srNo === null || srNo === void 0 ? void 0 : srNo.toString()) || "",
                    shippingBillNo: (shippingBillNo === null || shippingBillNo === void 0 ? void 0 : shippingBillNo.toString()) || "",
                    shippingBillDate: (shippingBillDate === null || shippingBillDate === void 0 ? void 0 : shippingBillDate.toString()) || "",
                    thirdPartyExporter: (thirdPartyExporter === null || thirdPartyExporter === void 0 ? void 0 : thirdPartyExporter.toString()) || "",
                    hsCodeAndDescription: (hsCodeAndDescription === null || hsCodeAndDescription === void 0 ? void 0 : hsCodeAndDescription.toString()) || "",
                    epcgLicNo: (epcgLicNo === null || epcgLicNo === void 0 ? void 0 : epcgLicNo.toString()) || "",
                    cifValue: (cifValue === null || cifValue === void 0 ? void 0 : cifValue.toString()) || "",
                    freight: (freight === null || freight === void 0 ? void 0 : freight.toString()) || "",
                    insurance: (insurance === null || insurance === void 0 ? void 0 : insurance.toString()) || "",
                    brc: (brc === null || brc === void 0 ? void 0 : brc.toString()) || "",
                    exchangeRate: (exchangeRate === null || exchangeRate === void 0 ? void 0 : exchangeRate.toString()) || "",
                    cifValue2: (cifValue2 === null || cifValue2 === void 0 ? void 0 : cifValue2.toString()) || "",
                    freight2: (freight2 === null || freight2 === void 0 ? void 0 : freight2.toString()) || "",
                    insurance2: (insurance2 === null || insurance2 === void 0 ? void 0 : insurance2.toString()) || "",
                    brc2: (brc2 === null || brc2 === void 0 ? void 0 : brc2.toString()) || "",
                    exchangeRate2: (exchangeRate2 === null || exchangeRate2 === void 0 ? void 0 : exchangeRate2.toString()) || "",
                    invoiceNo: (invoiceNo === null || invoiceNo === void 0 ? void 0 : invoiceNo.toString()) || "",
                    invoiceDate: (invoiceDate === null || invoiceDate === void 0 ? void 0 : invoiceDate.toString()) || "",
                    basicAmount: (basicAmount === null || basicAmount === void 0 ? void 0 : basicAmount.toString()) || "",
                    invoiceValue: (invoiceValue === null || invoiceValue === void 0 ? void 0 : invoiceValue.toString()) || "",
                    bankPaymentReceivedDate: (bankPaymentReceivedDate === null || bankPaymentReceivedDate === void 0 ? void 0 : bankPaymentReceivedDate.toString()) || "",
                    amountReceived: (amountReceived === null || amountReceived === void 0 ? void 0 : amountReceived.toString()) || "",
                    amountRealised: (amountRealised === null || amountRealised === void 0 ? void 0 : amountRealised.toString()) || "",
                    qtyAsPerInvoiceAndSbMatch: (qtyAsPerInvoiceAndSbMatch === null || qtyAsPerInvoiceAndSbMatch === void 0 ? void 0 : qtyAsPerInvoiceAndSbMatch.toString()) || "",
                    epcgLicNoInTaxInvoice: (epcgLicNoInTaxInvoice === null || epcgLicNoInTaxInvoice === void 0 ? void 0 : epcgLicNoInTaxInvoice.toString()) || "",
                    lorryReceiptOrEwayBill: (lorryReceiptOrEwayBill === null || lorryReceiptOrEwayBill === void 0 ? void 0 : lorryReceiptOrEwayBill.toString()) || "",
                    bankStatement: (bankStatement === null || bankStatement === void 0 ? void 0 : bankStatement.toString()) || "",
                    product: (product === null || product === void 0 ? void 0 : product.toString()) || "",
                    remarks: (remarks === null || remarks === void 0 ? void 0 : remarks.toString()) || "",
                    addedByUserId: (addedByUserId === null || addedByUserId === void 0 ? void 0 : addedByUserId.toString()) || "",
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
                    srNo: (srNo === null || srNo === void 0 ? void 0 : srNo.toString()) || "",
                    shippingBillNo: (shippingBillNo === null || shippingBillNo === void 0 ? void 0 : shippingBillNo.toString()) || "",
                    shippingBillDate: (shippingBillDate === null || shippingBillDate === void 0 ? void 0 : shippingBillDate.toString()) || "",
                    shippingBillCifValue: (shippingBillCifValue === null || shippingBillCifValue === void 0 ? void 0 : shippingBillCifValue.toString()) || "",
                    brcValue: (brcValue === null || brcValue === void 0 ? void 0 : brcValue.toString()) || "",
                    lowerOfSbAndBrc: (lowerOfSbAndBrc === null || lowerOfSbAndBrc === void 0 ? void 0 : lowerOfSbAndBrc.toString()) || "",
                    shippingBillFreight: (shippingBillFreight === null || shippingBillFreight === void 0 ? void 0 : shippingBillFreight.toString()) || "",
                    shippingBillInsurance: (shippingBillInsurance === null || shippingBillInsurance === void 0 ? void 0 : shippingBillInsurance.toString()) || "",
                    fobValueInDollars: (fobValueInDollars === null || fobValueInDollars === void 0 ? void 0 : fobValueInDollars.toString()) || "",
                    exchangeRatePerShippingBill: (exchangeRatePerShippingBill === null || exchangeRatePerShippingBill === void 0 ? void 0 : exchangeRatePerShippingBill.toString()) || "",
                    fobValueInRupees: (fobValueInRupees === null || fobValueInRupees === void 0 ? void 0 : fobValueInRupees.toString()) || "",
                    addedByUserId: (addedByUserId === null || addedByUserId === void 0 ? void 0 : addedByUserId.toString()) || "",
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
                    srNo: (srNo === null || srNo === void 0 ? void 0 : srNo.toString()) || "",
                    shippingBillNo: (shippingBillNo === null || shippingBillNo === void 0 ? void 0 : shippingBillNo.toString()) || "",
                    shippingBillDate: (shippingBillDate === null || shippingBillDate === void 0 ? void 0 : shippingBillDate.toString()) || "",
                    taxInvoiceBillNo: (taxInvoiceBillNo === null || taxInvoiceBillNo === void 0 ? void 0 : taxInvoiceBillNo.toString()) || "",
                    taxInvoiceDate: (taxInvoiceDate === null || taxInvoiceDate === void 0 ? void 0 : taxInvoiceDate.toString()) || "",
                    taxInvoiceBasicAmount: (taxInvoiceBasicAmount === null || taxInvoiceBasicAmount === void 0 ? void 0 : taxInvoiceBasicAmount.toString()) || "",
                    taxInvoiceTax: (taxInvoiceTax === null || taxInvoiceTax === void 0 ? void 0 : taxInvoiceTax.toString()) || "",
                    taxInvoiceInvoiceValue: (taxInvoiceInvoiceValue === null || taxInvoiceInvoiceValue === void 0 ? void 0 : taxInvoiceInvoiceValue.toString()) || "",
                    paymentDetailsDate: (paymentDetailsDate === null || paymentDetailsDate === void 0 ? void 0 : paymentDetailsDate.toString()) || "",
                    paymentDetailsAmountReceived: (paymentDetailsAmountReceived === null || paymentDetailsAmountReceived === void 0 ? void 0 : paymentDetailsAmountReceived.toString()) || "",
                    paymentDetailsAmountRealised: (paymentDetailsAmountRealised === null || paymentDetailsAmountRealised === void 0 ? void 0 : paymentDetailsAmountRealised.toString()) || "",
                    lowerOfInvoiceAndBankStatement: (lowerOfInvoiceAndBankStatement === null || lowerOfInvoiceAndBankStatement === void 0 ? void 0 : lowerOfInvoiceAndBankStatement.toString()) || "",
                    proportionateAmountOf6ForInRs: (proportionateAmountOf6ForInRs === null || proportionateAmountOf6ForInRs === void 0 ? void 0 : proportionateAmountOf6ForInRs.toString()) || "",
                    exchangeRatePerShippingBill: (exchangeRatePerShippingBill === null || exchangeRatePerShippingBill === void 0 ? void 0 : exchangeRatePerShippingBill.toString()) || "",
                    forInUsd: (forInUsd === null || forInUsd === void 0 ? void 0 : forInUsd.toString()) || "",
                    addedByUserId: (addedByUserId === null || addedByUserId === void 0 ? void 0 : addedByUserId.toString()) || "",
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
            const { srNo, sameProductOrAlternativeProductService, shippingBillNo, shippingBillDate, fobValueRealizationProceedsRs, fobValueRealizationProceedsUs, fobValueAnnexure1Rs, fobValueAnnexure1Us, fobValueAnnexure2Rs, fobValueAnnexure2Us, fobValueLowerOf5_6_7Rs, fobValueLowerOf5_6_7Us, } = calculationSheet;
            yield __1.prisma.indirectExportCalculationSheet.create({
                data: {
                    srNo: (srNo === null || srNo === void 0 ? void 0 : srNo.toString()) || "",
                    sameProductOrAlternativeProductService: (sameProductOrAlternativeProductService === null || sameProductOrAlternativeProductService === void 0 ? void 0 : sameProductOrAlternativeProductService.toString()) || "",
                    shippingBillNo: (shippingBillNo === null || shippingBillNo === void 0 ? void 0 : shippingBillNo.toString()) || "",
                    shippingBillDate: (shippingBillDate === null || shippingBillDate === void 0 ? void 0 : shippingBillDate.toString()) || "",
                    fobValueRealizationProceedsRs: (fobValueRealizationProceedsRs === null || fobValueRealizationProceedsRs === void 0 ? void 0 : fobValueRealizationProceedsRs.toString()) || "",
                    fobValueRealizationProceedsUs: (fobValueRealizationProceedsUs === null || fobValueRealizationProceedsUs === void 0 ? void 0 : fobValueRealizationProceedsUs.toString()) || "",
                    fobValueAnnexure1Rs: (fobValueAnnexure1Rs === null || fobValueAnnexure1Rs === void 0 ? void 0 : fobValueAnnexure1Rs.toString()) || "",
                    fobValueAnnexure1Us: (fobValueAnnexure1Us === null || fobValueAnnexure1Us === void 0 ? void 0 : fobValueAnnexure1Us.toString()) || "",
                    fobValueAnnexure2Rs: (fobValueAnnexure2Rs === null || fobValueAnnexure2Rs === void 0 ? void 0 : fobValueAnnexure2Rs.toString()) || "",
                    fobValueAnnexure2Us: (fobValueAnnexure2Us === null || fobValueAnnexure2Us === void 0 ? void 0 : fobValueAnnexure2Us.toString()) || "",
                    fobValueLowerOf5_6_7Rs: (fobValueLowerOf5_6_7Rs === null || fobValueLowerOf5_6_7Rs === void 0 ? void 0 : fobValueLowerOf5_6_7Rs.toString()) || "",
                    fobValueLowerOf5_6_7Us: (fobValueLowerOf5_6_7Us === null || fobValueLowerOf5_6_7Us === void 0 ? void 0 : fobValueLowerOf5_6_7Us.toString()) || "",
                    addedByUserId: (addedByUserId === null || addedByUserId === void 0 ? void 0 : addedByUserId.toString()) || "",
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
                    srNo: (srNo === null || srNo === void 0 ? void 0 : srNo.toString()) || "",
                    shippingBillNo: (shippingBillNo === null || shippingBillNo === void 0 ? void 0 : shippingBillNo.toString()) || "",
                    shippingBillDate: (shippingBillDate === null || shippingBillDate === void 0 ? void 0 : shippingBillDate.toString()) || "",
                    invoiceNo: (invoiceNo === null || invoiceNo === void 0 ? void 0 : invoiceNo.toString()) || "",
                    invoiceDate: (invoiceDate === null || invoiceDate === void 0 ? void 0 : invoiceDate.toString()) || "",
                    amountRealisedAsPerBrcUs: (amountRealisedAsPerBrcUs === null || amountRealisedAsPerBrcUs === void 0 ? void 0 : amountRealisedAsPerBrcUs.toString()) || "",
                    amountRealisedAsPerBrcExchRate: (amountRealisedAsPerBrcExchRate === null || amountRealisedAsPerBrcExchRate === void 0 ? void 0 : amountRealisedAsPerBrcExchRate.toString()) || "",
                    amountRealisedAsPerBrcRs: (amountRealisedAsPerBrcRs === null || amountRealisedAsPerBrcRs === void 0 ? void 0 : amountRealisedAsPerBrcRs.toString()) || "",
                    amountRealisedInBankRs: (amountRealisedInBankRs === null || amountRealisedInBankRs === void 0 ? void 0 : amountRealisedInBankRs.toString()) || "",
                    amountLessOfCol6And7Rs: (amountLessOfCol6And7Rs === null || amountLessOfCol6And7Rs === void 0 ? void 0 : amountLessOfCol6And7Rs.toString()) || "",
                    convertedIntoUsd: (convertedIntoUsd === null || convertedIntoUsd === void 0 ? void 0 : convertedIntoUsd.toString()) || "",
                    addedByUserId: (addedByUserId === null || addedByUserId === void 0 ? void 0 : addedByUserId.toString()) || "",
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
                    srNo: (srNo === null || srNo === void 0 ? void 0 : srNo.toString()) || "",
                    sameProductOrService: (sameProductOrService === null || sameProductOrService === void 0 ? void 0 : sameProductOrService.toString()) || "",
                    shippingBillNo: (shippingBillNo === null || shippingBillNo === void 0 ? void 0 : shippingBillNo.toString()) || "",
                    shippingBillDate: (shippingBillDate === null || shippingBillDate === void 0 ? void 0 : shippingBillDate.toString()) || "",
                    directExportsRs: (directExportsRs === null || directExportsRs === void 0 ? void 0 : directExportsRs.toString()) || "",
                    directExportsUs: (directExportsUs === null || directExportsUs === void 0 ? void 0 : directExportsUs.toString()) || "",
                    deemedExports: (deemedExports === null || deemedExports === void 0 ? void 0 : deemedExports.toString()) || "",
                    thirdPartyExportsRs: (thirdPartyExportsRs === null || thirdPartyExportsRs === void 0 ? void 0 : thirdPartyExportsRs.toString()) || "",
                    thirdPartyExportsUs: (thirdPartyExportsUs === null || thirdPartyExportsUs === void 0 ? void 0 : thirdPartyExportsUs.toString()) || "",
                    byGroupCompany: (byGroupCompany === null || byGroupCompany === void 0 ? void 0 : byGroupCompany.toString()) || "",
                    otherRnDServicesOrRoyalty: (otherRnDServicesOrRoyalty === null || otherRnDServicesOrRoyalty === void 0 ? void 0 : otherRnDServicesOrRoyalty.toString()) || "",
                    totalRs: (totalRs === null || totalRs === void 0 ? void 0 : totalRs.toString()) || "",
                    totalUs: (totalUs === null || totalUs === void 0 ? void 0 : totalUs.toString()) || "",
                    addedByUserId: (addedByUserId === null || addedByUserId === void 0 ? void 0 : addedByUserId.toString()) || "",
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
