import express from "express";
import { getAllUsers } from "../controller/manageUserController";

const router = express.Router();

router.get("/getallusers", getAllUsers);

export default router;
