import express from "express";

import indeirectexportRoute from "./components/indirectexportRoute"; 
import directexport from "./components/directexportRoute";   

const router = express.Router();

router.use("/indirectexport", indeirectexportRoute);
router.use("/directexport", directexport);

export default router;


