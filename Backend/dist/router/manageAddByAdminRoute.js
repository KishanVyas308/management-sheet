"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const manageAddByAdminController_1 = require("../controller/manageAddByAdminController");
const router = express_1.default.Router();
router.post('/user', manageAddByAdminController_1.addNewUser);
router.post('/exporter', manageAddByAdminController_1.addNewExpoter);
exports.default = router;
