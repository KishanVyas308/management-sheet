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
exports.part1section1 = part1section1;
exports.part1section2 = part1section2;
exports.part1section3 = part1section3;
exports.part2section1 = part2section1;
exports.part2section2 = part2section2;
exports.part2section3 = part2section3;
exports.part3section1 = part3section1;
exports.part3section2 = part3section2;
exports.part3section3 = part3section3;
exports.part4section1 = part4section1;
exports.part4section2 = part4section2;
exports.part4section3 = part4section3;
exports.part4section4 = part4section4;
exports.part4section5 = part4section5;
exports.part4section6 = part4section6;
exports.part5 = part5;
const __1 = require("..");
function part1section1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        try {
            const user = yield __1.prisma.user.findUnique({
                where: {
                    id: data.addedByUserId,
                },
                select: {
                    currentShippingBillId: true,
                },
            });
            const upload = yield __1.prisma.part1Section1.create({
                data: data,
            });
            if (user && user.currentShippingBillId != "") {
                const updateManageUserShippingBill = yield __1.prisma.manageUserShippingBill.update({
                    where: {
                        id: user.currentShippingBillId,
                    },
                    data: {
                        isPart1Section1Completed: true,
                        currentExportersName: data.exportersName,
                    },
                });
                checkIfAllTaskTakCompleted(updateManageUserShippingBill);
            }
            return res.json({ message: "Data imported successfully" });
        }
        catch (error) {
            console.error("Error importing data:", error);
            return res.json({ message: "Error importing data" });
        }
    });
}
function part1section2(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        try {
            const user = yield __1.prisma.user.findUnique({
                where: {
                    id: data.addedByUserId,
                },
                select: {
                    currentShippingBillId: true,
                },
            });
            const upload = yield __1.prisma.part1Section2.create({
                data: data,
            });
            if (user && user.currentShippingBillId != "") {
                const updateManageUserShippingBill = yield __1.prisma.manageUserShippingBill.update({
                    where: {
                        id: user.currentShippingBillId,
                    },
                    data: {
                        isPart1Section2Completed: true,
                    },
                });
                checkIfAllTaskTakCompleted(updateManageUserShippingBill);
            }
            return res.json({ message: "Data imported successfully" });
        }
        catch (error) {
            console.error("Error importing data:", error);
            return res.json({ message: "Error importing data" });
        }
    });
}
function part1section3(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        try {
            const user = yield __1.prisma.user.findUnique({
                where: {
                    id: data.addedByUserId,
                },
                select: {
                    currentShippingBillId: true,
                },
            });
            const upload = yield __1.prisma.part1Section3.create({
                data: data,
            });
            if (user && user.currentShippingBillId != "") {
                const updateManageUserShippingBill = yield __1.prisma.manageUserShippingBill.update({
                    where: {
                        id: user.currentShippingBillId,
                    },
                    data: {
                        isPart1Section3Completed: true,
                    },
                });
                checkIfAllTaskTakCompleted(updateManageUserShippingBill);
            }
            return res.json({ message: "Data imported successfully" });
        }
        catch (error) {
            console.error("Error importing data:", error);
            return res.json({ message: "Error importing data" });
        }
    });
}
function part2section1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const user = yield __1.prisma.user.findUnique({
                where: {
                    id: data.addedByUserId,
                },
                select: {
                    currentShippingBillId: true,
                },
            });
            const upload = yield __1.prisma.part2Section1.create({
                data: data,
            });
            if (user && user.currentShippingBillId != "") {
                const updateManageUserShippingBill = yield __1.prisma.manageUserShippingBill.update({
                    where: {
                        id: user.currentShippingBillId,
                    },
                    data: {
                        isPart2Section1Completed: true,
                    },
                });
                checkIfAllTaskTakCompleted(updateManageUserShippingBill);
            }
            return res.json({ message: "Data imported successfully" });
        }
        catch (error) {
            console.error("Error importing data:", error);
            return res.json({ message: "Error importing data" });
        }
    });
}
function part2section2(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const user = yield __1.prisma.user.findUnique({
                where: {
                    id: data.addedByUserId,
                },
                select: {
                    currentShippingBillId: true,
                },
            });
            const upload = yield __1.prisma.part2Section2.create({
                data: data,
            });
            if (user && user.currentShippingBillId != "") {
                const updateManageUserShippingBill = yield __1.prisma.manageUserShippingBill.update({
                    where: {
                        id: user.currentShippingBillId,
                    },
                    data: {
                        isPart2Section2Completed: true,
                    },
                });
                checkIfAllTaskTakCompleted(updateManageUserShippingBill);
            }
            return res.json({ message: "Data imported successfully" });
        }
        catch (error) {
            console.error("Error importing data:", error);
            return res.json({ message: "Error importing data" });
        }
    });
}
function part2section3(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const user = yield __1.prisma.user.findUnique({
                where: {
                    id: data.addedByUserId,
                },
                select: {
                    currentShippingBillId: true,
                },
            });
            const upload = yield __1.prisma.part2Section3.create({
                data: data,
            });
            if (user && user.currentShippingBillId != "") {
                const updateManageUserShippingBill = yield __1.prisma.manageUserShippingBill.update({
                    where: {
                        id: user.currentShippingBillId,
                    },
                    data: {
                        isPart2Section3Completed: true,
                    },
                });
                checkIfAllTaskTakCompleted(updateManageUserShippingBill);
            }
            return res.json({ message: "Data imported successfully" });
        }
        catch (error) {
            console.error("Error importing data:", error);
            return res.json({ message: "Error importing data" });
        }
    });
}
function part3section1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const user = yield __1.prisma.user.findUnique({
                where: {
                    id: data.addedByUserId,
                },
                select: {
                    currentShippingBillId: true,
                },
            });
            const upload = yield __1.prisma.part3Section1.create({
                data: data,
            });
            if (user && user.currentShippingBillId != "") {
                const updateManageUserShippingBill = yield __1.prisma.manageUserShippingBill.update({
                    where: {
                        id: user.currentShippingBillId,
                    },
                    data: {
                        isPart3Section1Completed: true,
                    },
                });
                checkIfAllTaskTakCompleted(updateManageUserShippingBill);
            }
            return res.json({ message: "Data imported successfully" });
        }
        catch (error) {
            console.error("Error importing data:", error);
            return res.json({ message: "Error importing data" });
        }
    });
}
function part3section2(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const user = yield __1.prisma.user.findUnique({
                where: {
                    id: data.addedByUserId,
                },
                select: {
                    currentShippingBillId: true,
                },
            });
            const upload = yield __1.prisma.part3Section2.create({
                data: data,
            });
            if (user && user.currentShippingBillId != "") {
                const updateManageUserShippingBill = yield __1.prisma.manageUserShippingBill.update({
                    where: {
                        id: user.currentShippingBillId,
                    },
                    data: {
                        isPart3Section2Completed: true,
                    },
                });
                checkIfAllTaskTakCompleted(updateManageUserShippingBill);
            }
            return res.json({ message: "Data imported successfully" });
        }
        catch (error) {
            console.error("Error importing data:", error);
            return res.json({ message: "Error importing data" });
        }
    });
}
function part3section3(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const user = yield __1.prisma.user.findUnique({
                where: {
                    id: data.addedByUserId,
                },
                select: {
                    currentShippingBillId: true,
                },
            });
            const upload = yield __1.prisma.part3Section3.create({
                data: data,
            });
            if (user && user.currentShippingBillId != "") {
                const updateManageUserShippingBill = yield __1.prisma.manageUserShippingBill.update({
                    where: {
                        id: user.currentShippingBillId,
                    },
                    data: {
                        isPart3Section3Completed: true,
                    },
                });
                checkIfAllTaskTakCompleted(updateManageUserShippingBill);
            }
            return res.json({ message: "Data imported successfully" });
        }
        catch (error) {
            console.error("Error importing data:", error);
            return res.json({ message: "Error importing data" });
        }
    });
}
function part4section1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const user = yield __1.prisma.user.findUnique({
                where: {
                    id: data.addedByUserId,
                },
                select: {
                    currentShippingBillId: true,
                },
            });
            const upload = yield __1.prisma.part4Section1.create({
                data: data,
            });
            if (user && user.currentShippingBillId != "") {
                const updateManageUserShippingBill = yield __1.prisma.manageUserShippingBill.update({
                    where: {
                        id: user.currentShippingBillId,
                    },
                    data: {
                        isPart4Section1Completed: true,
                    },
                });
                checkIfAllTaskTakCompleted(updateManageUserShippingBill);
            }
            return res.json({ message: "Data imported successfully" });
        }
        catch (error) {
            console.error("Error importing data:", error);
            return res.json({ message: "Error importing data" });
        }
    });
}
function part4section2(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const user = yield __1.prisma.user.findUnique({
                where: {
                    id: data.addedByUserId,
                },
                select: {
                    currentShippingBillId: true,
                },
            });
            const upload = yield __1.prisma.part4Section2.create({
                data: data,
            });
            if (user && user.currentShippingBillId != "") {
                const updateManageUserShippingBill = yield __1.prisma.manageUserShippingBill.update({
                    where: {
                        id: user.currentShippingBillId,
                    },
                    data: {
                        isPart4Section2Completed: true,
                    },
                });
                checkIfAllTaskTakCompleted(updateManageUserShippingBill);
            }
            return res.json({ message: "Data imported successfully" });
        }
        catch (error) {
            console.error("Error importing data:", error);
            return res.json({ message: "Error importing data" });
        }
    });
}
function part4section3(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const user = yield __1.prisma.user.findUnique({
                where: {
                    id: data.addedByUserId,
                },
                select: {
                    currentShippingBillId: true,
                },
            });
            const upload = yield __1.prisma.part4Section3.create({
                data: data,
            });
            if (user && user.currentShippingBillId != "") {
                const updateManageUserShippingBill = yield __1.prisma.manageUserShippingBill.update({
                    where: {
                        id: user.currentShippingBillId,
                    },
                    data: {
                        isPart4Section3Completed: true,
                    },
                });
                checkIfAllTaskTakCompleted(updateManageUserShippingBill);
            }
            return res.json({ message: "Data imported successfully" });
        }
        catch (error) {
            console.error("Error importing data:", error);
            return res.json({ message: "Error importing data" });
        }
    });
}
function part4section4(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const user = yield __1.prisma.user.findUnique({
                where: {
                    id: data.addedByUserId,
                },
                select: {
                    currentShippingBillId: true,
                },
            });
            const upload = yield __1.prisma.part4Section4.create({
                data: data,
            });
            if (user && user.currentShippingBillId != "") {
                const updateManageUserShippingBill = yield __1.prisma.manageUserShippingBill.update({
                    where: {
                        id: user.currentShippingBillId,
                    },
                    data: {
                        isPart4Section4Completed: true,
                    },
                });
                checkIfAllTaskTakCompleted(updateManageUserShippingBill);
            }
            return res.json({ message: "Data imported successfully" });
        }
        catch (error) {
            console.error("Error importing data:", error);
            return res.json({ message: "Error importing data" });
        }
    });
}
function part4section5(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const user = yield __1.prisma.user.findUnique({
                where: {
                    id: data.addedByUserId,
                },
                select: {
                    currentShippingBillId: true,
                },
            });
            const upload = yield __1.prisma.part4Section5.create({
                data: data,
            });
            if (user && user.currentShippingBillId != "") {
                const updateManageUserShippingBill = yield __1.prisma.manageUserShippingBill.update({
                    where: {
                        id: user.currentShippingBillId,
                    },
                    data: {
                        isPart4Section5Completed: true,
                    },
                });
                checkIfAllTaskTakCompleted(updateManageUserShippingBill);
            }
            return res.json({ message: "Data imported successfully" });
        }
        catch (error) {
            console.error("Error importing data:", error);
            return res.json({ message: "Error importing data" });
        }
    });
}
function part4section6(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const user = yield __1.prisma.user.findUnique({
                where: {
                    id: data.addedByUserId,
                },
                select: {
                    currentShippingBillId: true,
                },
            });
            const upload = yield __1.prisma.part4Section6.create({
                data: data,
            });
            if (user && user.currentShippingBillId != "") {
                const updateManageUserShippingBill = yield __1.prisma.manageUserShippingBill.update({
                    where: {
                        id: user.currentShippingBillId,
                    },
                    data: {
                        isPart4Section6Completed: true,
                    },
                });
                checkIfAllTaskTakCompleted(updateManageUserShippingBill);
            }
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
            const user = yield __1.prisma.user.findUnique({
                where: {
                    id: data.addedByUserId,
                },
                select: {
                    currentShippingBillId: true,
                },
            });
            const upload = yield __1.prisma.part5.create({
                data: data,
            });
            if (user && user.currentShippingBillId != "") {
                const updateManageUserShippingBill = yield __1.prisma.manageUserShippingBill.update({
                    where: {
                        id: user.currentShippingBillId,
                    },
                    data: {
                        isPart5Completed: true,
                    },
                });
                checkIfAllTaskTakCompleted(updateManageUserShippingBill);
            }
            return res.json({ message: "Data imported successfully" });
        }
        catch (error) {
            console.error("Error importing data:", error);
            return res.json({ message: "Error importing data" });
        }
    });
}
function checkIfAllTaskTakCompleted(shippingBill) {
    return __awaiter(this, void 0, void 0, function* () {
        if (shippingBill.isPart1Section1Completed &&
            shippingBill.isPart1Section2Completed &&
            shippingBill.isPart1Section3Completed &&
            shippingBill.isPart2Section1Completed &&
            shippingBill.isPart2Section2Completed &&
            shippingBill.isPart2Section3Completed &&
            shippingBill.isPart3Section1Completed &&
            shippingBill.isPart3Section2Completed &&
            shippingBill.isPart3Section3Completed &&
            shippingBill.isPart4Section1Completed &&
            shippingBill.isPart4Section2Completed &&
            shippingBill.isPart4Section3Completed &&
            shippingBill.isPart4Section4Completed &&
            shippingBill.isPart4Section5Completed &&
            shippingBill.isPart4Section6Completed &&
            shippingBill.isPart5Completed) {
            if (shippingBill.completedShippingBill < shippingBill.totalShippingBill) {
                const updatedShippingBill = yield __1.prisma.manageUserShippingBill.update({
                    where: {
                        id: shippingBill.id,
                    },
                    data: {
                        completedShippingBill: shippingBill.completedShippingBill + 1,
                        isPart1Section1Completed: false,
                        isPart1Section2Completed: false,
                        isPart1Section3Completed: false,
                        isPart2Section1Completed: false,
                        isPart2Section2Completed: false,
                        isPart2Section3Completed: false,
                        isPart3Section1Completed: false,
                        isPart3Section2Completed: false,
                        isPart3Section3Completed: false,
                        isPart4Section1Completed: false,
                        isPart4Section2Completed: false,
                        isPart4Section3Completed: false,
                        isPart4Section4Completed: false,
                        isPart4Section5Completed: false,
                        isPart4Section6Completed: false,
                        isPart5Completed: false,
                    },
                });
            }
        }
    });
}
