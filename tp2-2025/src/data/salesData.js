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
    .find({ "customer.email": email })
    .toArray();
  return sale;
}

//4
export async function updateSaleCouponUsed(saleId) {
  const db = getDbSupplies();

  // Primero verifico si la venta existe y la obtengo
  const sale = await db
    .collection("sales")
    .findOne({ _id: new ObjectId(saleId) });
  if (!sale) {
    throw new Error("Venta no encontrada");
  }

  // Cupon es un booleano
  // por lo que seria mas facil cambiarlo a true o false y
  // viceversa que recibirlo como un valor por parametro
  const updateCupon = !sale.couponUsed;

  // Actualizo el campo couponUsed
  const result = await db
    .collection("sales")
    .updateOne(
      { _id: new ObjectId(saleId) },
      { $set: { couponUsed: updateCupon } },
    );
  return result;
}

//5
export async function getSalesTopRank(pageSize) {
  const db = getDbSupplies();
  console.log("PageSize en data: ", pageSize);
  // La funcion Agregate es para hacer consultas mas complejas en MongoDB
  const sales = await db.collection("sales").aggregate([
    { $unwind: "$items" }, // Agarra unicamente el array de items de las ventas y lo descompone
    {
      $group: { // Agrupa los resultados
        _id: "$items.name",       // Agrupa por nombre de producto
        totalAppearances: { $sum: 1 } // Suma uno cada vez que aparece el producto
      }
    },
    { $sort: { totalAppearances: -1 } }, // Ordena de mayor a menor
    { $limit: pageSize } // Agarra el top N productos
  ]).toArray();
  return sales;
}
