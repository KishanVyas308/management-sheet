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
exports.part1 = part1;
exports.part2 = part2;
exports.part3 = part3;
exports.part4 = part4;
exports.part5 = part5;
const __1 = require("..");
function part1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        try {
            const upload = yield __1.prisma.part1.create({
                data: data,
            });
            return res.json({ message: "Data imported successfully" });
        }
        catch (error) {
            console.error("Error importing data:", error);
            return res.json({ message: "Error importing data" });
        }
    });
}
function part2(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            console.log(data);
            const upload = yield __1.prisma.part2.create({
                data: data,
            });
            return res.json({ message: "Data imported successfully" });
        }
        catch (error) {
            console.error("Error importing data:", error);
            return res.json({ message: "Error importing data" });
        }
    });
}
function part3(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            console.log(data);
            const upload = yield __1.prisma.part3.create({
                data: data,
            });
            return res.json({ message: "Data imported successfully" });
        }
        catch (error) {
            console.error("Error importing data:", error);
            return res.json({ message: "Error importing data" });
        }
    });
}
function part4(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const upload = yield __1.prisma.part4.create({
                data: data,
            });
            return res.json({ message: "Data imported successfully" });
        }
        catch (error) {
            console.error("Error importing data:", error);
            return res.json({ message: "Error importing data" });
        }
    });
}
function part5(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const upload = yield __1.prisma.part5.create({
                data: data,
            });
            return res.json({ message: "Data imported successfully" });
        }
        catch (error) {
            console.error("Error importing data:", error);
            return res.json({ message: "Error importing data" });
        }
    });
}
