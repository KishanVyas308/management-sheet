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
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Seed data
        const users = [
            {
                email: "admin1@gmail.com",
                password: "admin1",
                contactPersonName: "Admin1",
                companyName: "AdminCorp1",
                addressLine1: "AdminAddress1",
                addressLine2: "AdminAddress2",
                city: "AdminCity",
                state: "AdminState",
                country: "AdminCountry",
                pin: "111111",
                webpage: "adminweb1.com",
                phoneNumber: "1234567890",
                gstNo: "GST1111",
                role: "ADMIN",
            },
            {
                email: "admin2@gmail.com",
                password: "admin2",
                contactPersonName: "Admin2",
                companyName: "AdminCorp2",
                addressLine1: "AdminAddress3",
                addressLine2: "AdminAddress4",
                city: "AdminCity2",
                state: "AdminState2",
                country: "AdminCountry2",
                pin: "222222",
                webpage: "adminweb2.com",
                phoneNumber: "0987654321",
                gstNo: "GST2222",
                role: "ADMIN",
            },
            {
                email: "user1@gmail.com",
                password: "user1",
                contactPersonName: "User1",
                companyName: "UserCorp1",
                addressLine1: "UserAddress1",
                addressLine2: "UserAddress2",
                city: "UserCity",
                state: "UserState",
                country: "UserCountry",
                pin: "333333",
                webpage: "userweb1.com",
                phoneNumber: "2345678901",
                gstNo: "GST3333",
                role: "USER",
            },
            {
                email: "user2@gmail.com",
                password: "user2",
                contactPersonName: "User2",
                companyName: "UserCorp2",
                addressLine1: "UserAddress3",
                addressLine2: "UserAddress4",
                city: "UserCity2",
                state: "UserState2",
                country: "UserCountry2",
                pin: "444444",
                webpage: "userweb2.com",
                phoneNumber: "3456789012",
                gstNo: "GST4444",
                role: "USER",
            },
        ];
        // Insert data
        for (const user of users) {
            // await prisma.user.create({ data: user });
            let config = {
                method: "post",
                maxBodyLength: Infinity,
                url: "http://localhost:3000/api/v1/auth/signup",
                headers: {
                    "Content-Type": "application/json, application/json",
                    "Accept-Language": "en-US,en;q=0.9",
                    Origin: "http://localhost:5173",
                    Referer: "http://localhost:5173/",
                    "Sec-Fetch-Dest": "empty",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-GPC": "1",
                    "sec-ch-ua": '"Chromium";v="130", "Brave";v="130", "Not?A_Brand";v="99"',
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": '"Windows"',
                },
                data: user,
            };
            axios_1.default
                .request(config)
                .then((response) => {
                console.log(JSON.stringify(response.data));
            })
                .catch((error) => {
                console.log(error);
            });
        }
        console.log("Seeding completed.");
    });
}
main();
