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
exports.test = test;
const __1 = require("..");
function test(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { startDate, endDate, name, type, minValue, maxValue } = req.query;
        // Construct a dynamic filter object
        let filters = {};
        if (startDate && endDate) {
            filters.date = {
                gte: new Date(startDate),
                lte: new Date(endDate),
            };
        }
        if (name) {
            filters.exportersName = {
                contains: name,
            };
        }
        if (type) {
            filters.type = {
                contains: type,
            };
        }
        if (minValue && maxValue) {
            filters.fobValue = {
                gte: parseFloat(minValue),
                lte: parseFloat(maxValue),
            };
        }
        // Fetch data based on filters
        try {
            const data = yield __1.prisma.part1Section1.findMany({
                where: filters,
                select: {
                    id: true,
                    exportersName: true,
                    type: true,
                    adCode: true,
                    ifscNo: true,
                }
            });
            res.json(data);
        }
        catch (err) {
            res.status(500).json({ error: 'Failed to fetch data' });
        }
    });
}
