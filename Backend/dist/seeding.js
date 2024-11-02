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
const axios_1 = __importDefault(require("axios"));
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        // admin seeding
        const adminCount = 2;
        for (let i = 1; i <= adminCount; i++) {
            const res = axios_1.default.post("http://localhost:3000/api/v1/auth/signup", {
                email: `admin${i}@gmail.com`,
                password: `admin${i}`,
                contactPersonName: `Admin${i}`,
                companyName: "abc",
                addressLine1: "huhgu",
                addressLine2: "uhuh",
                city: "uhuh",
                state: "uhu",
                country: "huh",
                pin: "989898",
                webpage: "we",
                phoneNumber: "1231313141",
                gstNo: "232424",
                role: "ADMIN",
            });
            console.log("pass for admin ", i, " is ", `admin${i}`);
        }
        // admin seeding
        const userCount = 4;
        for (let i = 1; i <= userCount; i++) {
            axios_1.default.post("http://localhost:3000/api/v1/auth/signup", {
                email: `user${i}@gmail.com`,
                password: `user${i}`,
                contactPersonName: `User${i}`,
                companyName: "abc",
                addressLine1: "huhgu",
                addressLine2: "uhuh",
                city: "uhuh",
                state: "uhu",
                country: "huh",
                pin: "989898",
                webpage: "we",
                phoneNumber: "1231313141",
                gstNo: "232424",
                role: "USER",
            });
        }
    });
}
seed();
