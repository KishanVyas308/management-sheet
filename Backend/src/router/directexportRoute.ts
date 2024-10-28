import express from "express";
import { addAnnexure1, addAnnexureA, addBasicSheet, getSummary } from "../controller/directexportController";


const router = express.Router();

router.post("/basicsheet", addBasicSheet )
router.post("/annexure1", addAnnexure1 )
router.post("/annexureA", addAnnexureA )
router.get("/summary", getSummary )
export default router;
