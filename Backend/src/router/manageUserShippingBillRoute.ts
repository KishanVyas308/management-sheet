import express from "express";
import { assignNewtask, getAllUsersShippingBill } from "../controller/manageUserShippingBillController";


const router = express.Router();

router.post("/assignNewTask", assignNewtask);

router.get("/getAllUsersShippingBill", getAllUsersShippingBill);

export default router;