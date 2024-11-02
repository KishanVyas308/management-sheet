import express from "express";
import { getAllUsers, getUserCompletedDirectExports, getUserCompletedShippingBill } from "../controller/manageUserController";

const router = express.Router();

router.get("/getallusers", getAllUsers);

router.get("/usercompleteddirectexports/:userId", getUserCompletedDirectExports);
router.get("/usercompletedshippingbills/:userId", getUserCompletedShippingBill);
export default router;
