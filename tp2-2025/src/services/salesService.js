import {
  findAllSales,
  findSale,
  findSaleByEmail,
  updateSaleCouponUsed,
  findTopProducts,
} from "../data/salesData.js";

export const getSales = async (page, pageSize) => {
  return await findAllSales(page, pageSize);
};

//1
export const getSalesServices = async (id) => {
  return await findSale(id);
};

//2
export const getSalesTotal = async () => {
  const sales = await findAllSales();
  sales.forEach((element) => {
    element.items.forEach((element2) => {
      element2.total = element2["price"] * element2["quantity"];
    });
  });
  return sales;
};

//3
export const getSalesEmail = async () => {
  const sales = await findSaleByEmail();
  return sales;
};

//4
export const updateSaleCupon = async (saleId, couponUsed) => {
  const sales = await updateSaleCouponUsed(saleId, couponUsed);
  return sales;
};

//5
export const getTopProducts = async (limit) => {
  const products = await findTopProducts(limit);
  return products;
};
