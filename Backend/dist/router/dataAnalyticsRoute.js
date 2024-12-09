"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dataAnalyticsController_1 = require("../controller/dataAnalyticsController");
const router = express_1.default.Router();
// router.get("/getallusers", getAllUsers); 
router.get('/directexport-data-on-date', dataAnalyticsController_1.directExportDataOnDate);
router.get('/indirectexport-data-on-data', dataAnalyticsController_1.indirectExportDataOnDate);
exports.default = router;
