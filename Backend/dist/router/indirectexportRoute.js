"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indirectexportController_1 = require("../controller/indirectexportController");
const router = express_1.default.Router();
router.post("/alldata", indirectexportController_1.addAllIndirectExportData);
exports.default = router;
