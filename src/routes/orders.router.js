import { Router } from "express";
import { createOrder, getOrderById, getOrders, resolveOrder } from "../controllers/orders.controller.js";
   
const router=Router()
router.get("/",getOrders)
router.get("/:oid",getOrderById)
router.post("/",createOrder)
router.put("/:oid",resolveOrder)

export default router;