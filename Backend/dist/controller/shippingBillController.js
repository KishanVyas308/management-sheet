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
exports.addBasicSheet = addBasicSheet;
const __1 = require("..");
function addBasicSheet(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { basicSheet } = req.body;
            console.log(basicSheet);
            const { companyName, srNo, shippingBillNo, shippingBillDate, thirdPartyExporter, hsCodeAndDescription, epcgLicNo, cifValue, freight, insurance, brc, exchangeRateOrProprtionRatio, exchangeRate, product, remarks, } = basicSheet;
            const basicSheet1 = yield __1.prisma.basicSheet.create({
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
                    cifValue2: (Number(cifValue) * Number(exchangeRateOrProprtionRatio)).toString(),
                    freight2: (Number(freight) * Number(exchangeRateOrProprtionRatio)).toString(),
                    insurance2: (Number(insurance) * Number(exchangeRateOrProprtionRatio)).toString(),
                    brc2: (Number(brc) * Number(exchangeRateOrProprtionRatio)).toString(),
                    exchangeRate: exchangeRate,
                    product: product,
                    remarks: remarks,
                },
            });
            const shippingBillCifValueInDoller = (Number(cifValue) * Number(exchangeRateOrProprtionRatio)).toString();
            const brcValue = (Number(brc) * Number(exchangeRateOrProprtionRatio)).toString();
            const lowerOfSbAndBrc = Math.min(Number(cifValue) * Number(exchangeRateOrProprtionRatio), Number(brc) * Number(exchangeRateOrProprtionRatio)).toString();
            const shippingBillFreight = (Number(freight) * Number(exchangeRateOrProprtionRatio)).toString();
            const shippingBillInsurance = (Number(insurance) * Number(exchangeRateOrProprtionRatio)).toString();
            const fobValueInDoller = (Number(lowerOfSbAndBrc) -
                (Number(shippingBillFreight) + Number(shippingBillInsurance))).toString();
            const ExchangeRatePerShippingBill = exchangeRate;
            const fobValueInRupees = ((Number(lowerOfSbAndBrc) -
                (Number(shippingBillFreight) + Number(shippingBillInsurance))) *
                Number(ExchangeRatePerShippingBill)).toString();
            const Annexure1 = yield __1.prisma.annexure1.create({
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
            const AnnexureA = yield __1.prisma.annexureA.create({
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
        }
        catch (error) {
            return res.status(500).json({ message: "Error adding basic sheet" });
        }
    });
}
