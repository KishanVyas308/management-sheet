"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shippingBillController_1 = require("../controller/shippingBillController");
const router = express_1.default.Router();
router.post("/basicsheet", shippingBillController_1.addBasicSheet);
exports.default = router;
