import express from "express";
import { addAllIndirectExportData } from "../controller/indirectexportController";

const router = express.Router();

router.post("/alldata", addAllIndirectExportData )
export default router;
