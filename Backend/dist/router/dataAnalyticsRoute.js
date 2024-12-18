"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dataAnalyticsController_1 = require("../controller/dataAnalyticsController");
const router = express_1.default.Router();
// router.get("/getallusers", getAllUsers); 
// Document List
router.get('/directexport', dataAnalyticsController_1.directExportDataOnDate);
router.get('/indirectexport', dataAnalyticsController_1.indirectExportDataOnDate);
// Form 
router.get('/epcglicense', dataAnalyticsController_1.epcgLicenceDataOnDate);
router.get('/advancelicense');
router.get('/shippingbill', dataAnalyticsController_1.shippingBillDataOnDate);
router.get('/invoice', dataAnalyticsController_1.invoiceDataOnDate);
router.get('/ebrc');
router.get('/ewaybill', dataAnalyticsController_1.ewayBillDataOnDate);
router.get('/subsidy');
exports.default = router;
