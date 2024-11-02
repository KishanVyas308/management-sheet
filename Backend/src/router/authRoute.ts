import express from "express";

import { login, signup } from "../controller/authControler";

const router = express.Router();

if (process.env.NODE_ENV !== 'production') {
    router.post("/signup", signup);
}

router.post("/login", login);

export default router;
