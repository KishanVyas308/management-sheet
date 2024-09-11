"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const authRoute_1 = __importDefault(require("./router/authRoute"));
const existingDataRoute_1 = __importDefault(require("./router/existingDataRoute"));
const newDataRoute_1 = __importDefault(require("./router/newDataRoute"));
const authControler_1 = require("./controller/authControler");
const middleWare_1 = require("./middleWare");
const app = (0, express_1.default)();
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
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
