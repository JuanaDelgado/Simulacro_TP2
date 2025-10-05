import express from "express";
import {
  getAllSales,
  getSale,
  getSalesTotalEndpoint,
  getSalesEmailEndpoint,
  updateSalesCuponDescuento,
  getSalesTopRanking
} from "../controllers/salesController.js";

const router = express.Router();
router.get("/", getAllSales);
//2 Endpoint para obtener todas las ventas agregando la propiedad total
router.get("/total", getSalesTotalEndpoint);
//3 Endpoint para obtener las ventas de un cliente por su email
router.get("/customer/:email", getSalesEmailEndpoint);
//5 Endpoint para obtener los productos más vendidos
router.get("/top-products", getSalesTopRanking);
//4 Endpoint para actualizar el cupón de descuento de una venta
router.put("/:id", updateSalesCuponDescuento);
//1 Endpoint para obtener una venta por su ID
router.get("/:id", getSale);
export default router;
