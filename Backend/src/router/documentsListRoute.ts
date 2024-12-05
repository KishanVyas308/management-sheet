import express from "express";
import { addEWayBill,addInvoice  } from "../controller/documentsListController";

const router = express.Router();

router.post("/invoice", addInvoice )
router.post("/ewaybilldetails",  addEWayBill )
export default router;
