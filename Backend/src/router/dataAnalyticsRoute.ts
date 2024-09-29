import express from "express";
import { getAllUsers } from "../controller/manageUserController";
import { test } from "../controller/dataAnalyticsController";

const router = express.Router();

// router.get("/getallusers", getAllUsers); 


router.get('/data', test);


export default router;
