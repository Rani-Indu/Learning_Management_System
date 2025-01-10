// import express from "express";
import { Router } from "express";
const router = Router();

import {register, login, logout, getProfile} from '../controllers/user.controller.js'

router.post("/register", register);
router.post("/login", login);
router.post("/me", getProfile);
router.get("/logout", logout); // using get for logout - kyuki hum directly browser me url daal ke logout kar sakte hai, ye strength hai

export default router;
