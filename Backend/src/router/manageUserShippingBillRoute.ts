import express from "express";
import { getAllUsersShippingBill } from "../controller/manageUserShippingBillController";

const router = express.Router();

router.get("/getAllUsersShippingBill", getAllUsersShippingBill);


export default router;
