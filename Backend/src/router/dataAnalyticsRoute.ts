import express from "express";
import { getAllUsers } from "../controller/manageUserController";
import { directExportDataOnDate, ewayBillDataOnDate, indirectExportDataOnDate, invoiceDataOnDate, shippingBillDataOnDate, epcgLicenceDataOnDate } from "../controller/dataAnalyticsController";

const router = express.Router();

// router.get("/getallusers", getAllUsers); 


// Document List
router.get('/directexport', directExportDataOnDate);
router.get('/indirectexport', indirectExportDataOnDate);

// Form 
router.get('/epcglicense', epcgLicenceDataOnDate);
router.get('/advancelicense');
router.get('/shippingbill', shippingBillDataOnDate);
router.get('/invoice', invoiceDataOnDate);
router.get('/ebrc');
router.get('/ewaybill', ewayBillDataOnDate);
router.get('/subsidy');

export default router;
