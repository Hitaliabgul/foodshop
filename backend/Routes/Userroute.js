import express from "express";
import { login, signup } from "../Controller/Usercontroller.js";
const router=express.Router()

router.post("/signup",signup);
router.post("/login",login);

export default router;