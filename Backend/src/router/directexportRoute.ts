import express from "express";
import { addBasicSheet } from "../controller/directexportController";


const router = express.Router();

router.post("/basicsheet", addBasicSheet )

export default router;
