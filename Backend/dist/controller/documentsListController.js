"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addInvoice = addInvoice;
exports.addEWayBill = addEWayBill;
exports.addEpcgLicense = addEpcgLicense;
const __1 = require("..");
function addInvoice(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const responce = yield __1.prisma.invoice.create({
                data: req.body
            });
        }
        catch (e) {
            return res.json({ message: e });
        }
        return res.json({ message: "Added successfully" });
    });
}
function addEWayBill(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const responce = yield __1.prisma.eWayBillDetails.create({
                data: req.body
            });
        }
        catch (e) {
            return res.json({ message: e });
        }
        return res.json({ message: "Added successfully" });
    });
}
function addEpcgLicense(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const responce = yield __1.prisma.ePCGLicense.create({
                data: req.body
            });
        }
        catch (e) {
            return res.json({ message: e });
        }
        return res.json({ message: "Added successfully" });
    });
}
