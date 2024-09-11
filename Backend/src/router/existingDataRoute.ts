import express from "express";
import { uploadExecingData } from "../controller/existingDataControler";

const router = express.Router();

router.post("/upload", uploadExecingData);

export default router;
