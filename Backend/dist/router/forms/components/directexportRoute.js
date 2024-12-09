"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const directexportController_1 = require("../../../controller/directexportController");
const router = express_1.default.Router();
router.post("/basicsheet", directexportController_1.addBasicSheet);
router.post("/annexure1", directexportController_1.addAnnexure1);
router.post("/annexureA", directexportController_1.addAnnexureA);
router.get("/summary", directexportController_1.getSummary);
exports.default = router;
