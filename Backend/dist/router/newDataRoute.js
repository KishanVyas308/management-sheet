"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const newDataController_1 = require("../controller/newDataController");
const router = express_1.default.Router();
router.post("/part1", newDataController_1.part1);
router.post("/part2", newDataController_1.part2);
router.post("/part3", newDataController_1.part3);
router.post("/part4", newDataController_1.part4);
router.post("/part5", newDataController_1.part5);
exports.default = router;
