"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const manageUserShippingBillController_1 = require("../controller/manageUserShippingBillController");
const router = express_1.default.Router();
router.get("/getAllUsersShippingBill", manageUserShippingBillController_1.getAllUsersShippingBill);
exports.default = router;
