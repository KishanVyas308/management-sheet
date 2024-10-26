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
exports.getAllUsersShippingBill = void 0;
const __1 = require("..");
//? get all shipping bill
const getAllUsersShippingBill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usersWithCurrentBill = yield __1.prisma.user.findMany({
            select: {
                id: true,
                contactPersonName: true,
                currentShippingBillId: true, // Select the current shipping bill ID
            },
        });
        const shippingBill = yield __1.prisma.manageUserShippingBill.findMany({
            where: {
                id: {
                    in: usersWithCurrentBill.map((u) => u.currentShippingBillId), // Filter by current shipping bill ID
                },
            },
        });
        return res.status(200).json(shippingBill);
    }
    catch (error) {
        return res.json({ message: "Please try again later" });
    }
});
exports.getAllUsersShippingBill = getAllUsersShippingBill;
