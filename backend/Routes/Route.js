import express from "express";
import { getFood } from "../Controller/Foodcontroller";

const router=express.Router()

router.get("/",getFood);

export default router;