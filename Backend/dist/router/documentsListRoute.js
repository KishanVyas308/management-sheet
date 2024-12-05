"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const documentsListController_1 = require("../controller/documentsListController");
const router = express_1.default.Router();
router.post("/invoice", documentsListController_1.addInvoice);
router.post("/ewaybilldetails", documentsListController_1.addEWayBill);
exports.default = router;
