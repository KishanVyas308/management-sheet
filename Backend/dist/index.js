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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const http_1 = require("http");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const authControler_1 = require("./controller/authControler");
const middleWare_1 = require("./middleWare");
const authRoute_1 = __importDefault(require("./router/authRoute"));
const existingDataRoute_1 = __importDefault(require("./router/existingDataRoute"));
const newDataRoute_1 = __importDefault(require("./router/newDataRoute"));
const manageUser_1 = __importDefault(require("./router/manageUser"));
const dataAnalyticsRoute_1 = __importDefault(require("./router/dataAnalyticsRoute"));
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(httpServer, {
    cors: {
        methods: ["GET", "POST"],
    },
});
exports.prisma = new client_1.PrismaClient();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/api", authControler_1.myData);
//? auth api
app.use("/api/v1/auth", authRoute_1.default);
app.use(middleWare_1.verifyToken);
//? existing data api
app.use("/api/v1/ex", existingDataRoute_1.default);
//? new data api
app.use("/api/v1/newData", newDataRoute_1.default);
//? manage user api
app.use("/api/v1/manageUser", manageUser_1.default);
//? data analytics api
app.use("/api/v1/dataAnalytics", dataAnalyticsRoute_1.default);
//? socket api
io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (token) {
        jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err)
                return next(new Error("Invalid token"));
            socket.user = decoded;
            next();
        });
    }
    else {
        next(new Error("Authentication error"));
    }
});
io.on("connection", (socket) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("A user connected:", socket.user);
    try {
        const updaedUser = yield exports.prisma.user.update({
            where: { id: socket.user.id },
            data: { isOnline: true },
        });
        socket.broadcast.emit("userConnected", {
            id: updaedUser.id,
            name: updaedUser.contactPersonName,
            email: updaedUser.email,
            isOnline: updaedUser.isOnline,
        });
    }
    catch (error) {
        console.log("Error updating user online status", error);
    }
    // Listen for status update from clients
    socket.on("updateStatus", (statusData) => {
        // Broadcast updated status to all connected clients
        io.emit("statusChanged", statusData);
    });
    // Handle socket disconnection
    socket.on("disconnect", () => __awaiter(void 0, void 0, void 0, function* () {
        console.log("User disconnected:", socket.user.id);
        try {
            const updatedUser = yield exports.prisma.user.update({
                where: { id: socket.user.id },
                data: { isOnline: false },
            });
            socket.broadcast.emit("userDisconnected", {
                id: updatedUser.id,
                isOnline: updatedUser.isOnline,
            });
        }
        catch (error) {
            console.error("Error updating user offline status:", error);
        }
    }));
}));
const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
