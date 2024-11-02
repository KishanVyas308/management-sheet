"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const manageUserController_1 = require("../controller/manageUserController");
const router = express_1.default.Router();
router.get("/getallusers", manageUserController_1.getAllUsers);
router.get("/usercompleteddirectexports/:userId", manageUserController_1.getUserCompletedDirectExports);
router.get("/usercompletedshippingbills/:userId", manageUserController_1.getUserCompletedShippingBill);
exports.default = router;
