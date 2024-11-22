import express from "express";
import { getAllUsers } from "../controller/manageUserController";
import { directExportDataOnDate, indirectExportDataOnDate } from "../controller/dataAnalyticsController";

const router = express.Router();

// router.get("/getallusers", getAllUsers); 



router.get('/directexport-data-on-date', directExportDataOnDate);
router.get('/indirectexport-data-on-data', indirectExportDataOnDate);


export default router;
