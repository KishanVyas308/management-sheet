"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addInvoice = addInvoice;
exports.addEWayBill = addEWayBill;
const __1 = require("..");
function addInvoice(req, res) {
    try {
        const responce = __1.prisma.invoice.create({
            data: req.body
        });
    }
    catch (e) {
        return res.json({ message: e });
    }
    return res.json({ message: "Added successfully" });
}
function addEWayBill(req, res) {
    try {
        const responce = __1.prisma.eWayBillDetails.create({
            data: req.body
        });
    }
    catch (e) {
        return res.json({ message: e });
    }
    return res.json({ message: "Added successfully" });
}
