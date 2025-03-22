import { Router } from "express";
import { addProduct, createBusiness, getBusiness, getBusinessById } from "../controllers/business.controller.js";
  
const router=Router()
router.get("/",getBusiness)
router.get("/:bid",getBusinessById)
router.post("/",createBusiness)
router.post("/:bid/product",addProduct)

export default router;