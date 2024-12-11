import express from "express";
import { addEWayBill,addInvoice, addEpcgLicense  } from "../../controller/documentsListController";

import shippingBillRoute from "./shippingBillRoute";

const router = express.Router();

router.post("/invoice", addInvoice )
router.post("/ewaybilldetails",  addEWayBill )
router.use("/shippingbill", shippingBillRoute)
router.post("/epcglicense", addEpcgLicense)

export default router;
