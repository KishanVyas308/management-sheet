"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const existingDataControler_1 = require("../controller/existingDataControler");
const upload = (0, multer_1.default)({ dest: "uploads/" });
const router = express_1.default.Router();
router.post("/upload", upload.single("file"), existingDataControler_1.uploadExecingData);
router.get("/getall", existingDataControler_1.getAllData);
exports.default = router;
