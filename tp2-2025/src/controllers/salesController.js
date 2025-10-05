import {
  getSales,
  getSalesEmail,
  getSalesServices,
  getSalesTotal,
  updateSaleCupon,
  getTopProducts,
} from "../services/salesService.js";

export const getAllSales = async (req, res) => {
  try {
    const page = req.query.page ? parseInt(req.query.page) : undefined;
    const pageSize = req.query.pageSize
      ? parseInt(req.query.pageSize)
      : undefined;
    const sales = await getSales(page, pageSize);
    res.json(sales);
  } catch (error) {
    console.log("Error fetching sales: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//1
export const getSale = async (req, res) => {
  try {
    const id = req.params.id;
    const sale = await getSalesServices(id);
    res.status(200).json({ msg: "Busqueda de venta exitosa", sale });
  } catch (error) {
    console.log("Error fetching sales: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//2
export const getSalesTotalEndpoint = async (req, res) => {
  try {
    const sale = await getSalesTotal();
    res.status(200).json({ msg: "Busqueda de venta exitosa", sale });
  } catch (error) {
    console.log("Error fetching sales: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//3
export const getSalesEmailEndpoint = async (req, res) => {
  try {
    const sale = await getSalesEmail(req.params.email);
    res.status(200).json({ msg: sale });
  } catch (error) {
    console.log("Error fetching sales: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//4
export const updateSalesCuponDescuento = async (req, res) => {
  try {
    const sale = await updateSaleCupon(req.params.couponUsed);
    res.status(200).json({ msg: sale });
  } catch (error) {
    console.log("Error fetching sales: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//5
export const getSalesTopRanking = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 5;
    const topProducts = await getTopProducts(limit);
    res.status(200).json(topProducts);
  } catch (error) {
    console.log("Error fetching sales: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
