import express from "express";
import multer from "multer";
import { uploadExecingData } from "../controller/existingDataControler";

const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.post("/upload", upload.single("file") ,uploadExecingData);

export default router;
