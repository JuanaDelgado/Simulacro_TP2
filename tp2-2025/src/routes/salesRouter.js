import express from "express";
import {
  getAllSales,
  getSale,
  getSalesTotalEndpoint,
  getSalesEmailEndpoint,
  updateSalesCuponDescuento,
} from "../controllers/salesController.js";
import { getTopProducts } from "../services/salesService.js";

const router = express.Router();
router.get("/", getAllSales);
//2
router.get("/total", getSalesTotalEndpoint);
//3
router.get("/customer/:email", getSalesEmailEndpoint);
//4
router.put("/:id", updateSalesCuponDescuento);
//5
router.get("/top-products", getTopProducts);
//1
router.get("/sales/:id/cupon", getSale);
export default router;
