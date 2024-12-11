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
exports.directExportDataOnDate = directExportDataOnDate;
exports.indirectExportDataOnDate = indirectExportDataOnDate;
exports.ewayBillDataOnDate = ewayBillDataOnDate;
exports.invoiceDataOnDate = invoiceDataOnDate;
exports.shippingBillDataOnDate = shippingBillDataOnDate;
const __1 = require("..");
function directExportDataOnDate(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { startDate, endDate } = req.query;
        if (!startDate || !endDate) {
            return res.status(200).json({ selectDateError: 'Start date and end date are required' });
        }
        try {
            const data = yield __1.prisma.basicSheet.findMany({
                where: {
                    uploadedDate: {
                        gte: new Date(startDate),
                        lte: new Date(endDate),
                    },
                },
                orderBy: {
                    uploadedDate: 'desc',
                },
            });
            res.json(data);
        }
        catch (err) {
            res.status(500).json({ error: 'Failed to fetch data' });
        }
    });
}
function indirectExportDataOnDate(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { startDate, endDate } = req.query;
        if (!startDate || !endDate) {
            return res.status(200).json({ selectDateError: 'Start date and end date are required' });
        }
        try {
            const data = yield __1.prisma.basicSheet.findMany({
                where: {
                    uploadedDate: {
                        gte: new Date(startDate),
                        lte: new Date(endDate),
                    },
                },
                orderBy: {
                    uploadedDate: 'desc',
                },
            });
            res.json(data);
        }
        catch (err) {
            res.status(500).json({ error: 'Failed to fetch data' });
        }
    });
}
function shippingBillDataOnDate(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { startDate, endDate } = req.query;
        if (!startDate || !endDate) {
            return res.status(200).json({ selectDateError: 'Start date and end date are required' });
        }
        try {
            const data = yield __1.prisma.basicSheet.findMany({
                where: {
                    uploadedDate: {
                        gte: new Date(startDate),
                        lte: new Date(endDate),
                    },
                },
                orderBy: {
                    uploadedDate: 'desc',
                },
            });
            res.json(data);
        }
        catch (err) {
            res.status(500).json({ error: 'Failed to fetch data' });
        }
    });
}
function invoiceDataOnDate(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { startDate, endDate } = req.query;
        if (!startDate || !endDate) {
            return res.status(200).json({ selectDateError: 'Start date and end date are required' });
        }
        try {
            const data = yield __1.prisma.basicSheet.findMany({
                where: {
                    uploadedDate: {
                        gte: new Date(startDate),
                        lte: new Date(endDate),
                    },
                },
                orderBy: {
                    uploadedDate: 'desc',
                },
            });
            res.json(data);
        }
        catch (err) {
            res.status(500).json({ error: 'Failed to fetch data' });
        }
    });
}
function ewayBillDataOnDate(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { startDate, endDate } = req.query;
        if (!startDate || !endDate) {
            return res.status(200).json({ selectDateError: 'Start date and end date are required' });
        }
        try {
            const data = yield __1.prisma.basicSheet.findMany({
                where: {
                    uploadedDate: {
                        gte: new Date(startDate),
                        lte: new Date(endDate),
                    },
                },
                orderBy: {
                    uploadedDate: 'desc',
                },
            });
            res.json(data);
        }
        catch (err) {
            res.status(500).json({ error: 'Failed to fetch data' });
        }
    });
}
