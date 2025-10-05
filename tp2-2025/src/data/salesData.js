import { getDbSupplies } from "./connection.js";
import { ObjectId } from "mongodb";

export async function findAllSales(page, pageSize) {
  const db = getDbSupplies();
  if (page && pageSize) {
    const skip = (page - 1) * pageSize;
    const sales = await db
      .collection("sales")
      .find()
      .skip(skip)
      .limit(pageSize)
      .toArray();
    return sales;
  } else {
    // Sin paginación: trae todos los documentos
    const sales = await db.collection("sales").find().toArray();
    return sales;
  }
}

//1
export async function findSale(id) {
  const db = getDbSupplies();
  const sale = await db.collection("sales").findOne({ _id: new ObjectId(id) });
  return sale;
}

//3
export async function findSaleByEmail(email) {
  const db = getDbSupplies();
  const sale = await db
    .collection("sales")
    .updateOne({ "customers.email": email })
    .toArray();
  return sale;
}

//4
export async function updateSaleCouponUsed(saleId, couponUsed) {
  const db = getDbSupplies();
  const sale = await db
    .collection("sales")
    .updateOne(
      { _id: new ObjectId(saleId) },
      { $set: { couponUsed: couponUsed } },
    );
  return sale;
}

//5
export async function getSalesTopRank(pageSize) {
  const db = getDbSupplies();
  const sales = await db
    .collection("sales")
    .find()
    .sort({ campo: 1 })
    .limit(pageSize)
    .toArray();
  return sales;
}
