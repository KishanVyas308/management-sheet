import express from "express";
import { addBasicSheet } from "../controller/shippingBillController";


const router = express.Router();

router.post("/basicsheet", addBasicSheet )

export default router;
