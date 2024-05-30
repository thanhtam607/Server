import db from "../models/index";

let getAllBillsByIdUser = (id_user) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id_user) {
        resolve("Missing required parameter");
      }

      let bills = await db.Bill.findAll({
        where: { id_user: id_user },
        include: [
          {
            model: db.Bill_Detail,
            as: "billDetailData",
            attributes: ["amount", "price","notes"],
            include: [
              {
                model: db.Product,
                as: "ProductData",
                attributes: [
                  "id",
                  "name",
                  "size",
                  "weight",
                  "description",
                  "introduction",
                  "price",
                  "status",
                ],
                include: [
                  {
                    model: db.Product_Img,
                    as: "Images",
                    attributes: ["img"],
                    required: true,
                  },
                ],
              },
            ]
          },
        ],
        order: [["createdAt", "DESC"]],
      });

      resolve(bills);
    } catch (e) {
      reject(e);
    }
  });
};

let getBillById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve("Missing required parameter");
      }

      let bill = await db.Bill.findOne({
        where: { id: id },
        include: [
          {
            model: db.Bill_Detail,
            as: "billDetailData",
            attributes: ["amount", "price"],
            include: [
              {
                model: db.Product,
                as: "ProductData",
                attributes: [
                  "id",
                  "name",
                  "size",
                  "weight",
                  "description",
                  "introduction",
                  "price",
                  "status",
                ],
                include: [
                  {
                    model: db.Product_Img,
                    as: "Images",
                    attributes: ["img"],
                    required: true,
                  },
                ],
              },
            ],
          },
        ],
      });

      resolve(bill);
    } catch (e) {
      reject(e);
    }
  });
};

let updateStatusBill = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data) {
        resolve("Missing required parameter");
      }

      let bill = await db.Bill.update(
        {
          status: data.status,
        },
        {
          where: { id: data.id },
        }
      );

      resolve("Update status bill successfully");
    } catch (e) {
      reject(e);
    }
  });
};
let createBill=(data)=>{
  return new Promise(async (resolve, reject) => {
    if (data) {
      try {
        const bill =await db.Bill.create({
          id_user: data.id_user,
          fullname: data.fullname,
          phone_number: data.phone_number,
          notes: data.notes,
          pro_bill: data.pro_bill,
          fee_bill: data.fee_bill,
          payment: data.payment,
          status:1,
          address: data.address
        })
        let id = bill.id
        console.log('billDetail is an array and has length:', data.billDetail.length);
        data.billDetail.map(async (item) => {
          await createBillDetail(item, id);
        })
        resolve("Update successfully");
      }
    catch (e) {
      reject(e)
    }
    }
  })
}
let createBillDetail= (data, id_bill)=>{
  return new Promise(async (resolve, reject) => {
    try {
      if (data && id_bill) {
        await db.Bill_Detail.create({
          id_product: data.id_product ,
          id_bill: id_bill,
          amount: data.amount,
          notes: data.notes,
          price: data.price})

      }
    } catch (e) {
      reject(e)
    }
  })
}
module.exports = {
  getAllBillsByIdUser: getAllBillsByIdUser,
  getBillById: getBillById,
  updateStatusBill: updateStatusBill,
  createBill: createBill,
};
