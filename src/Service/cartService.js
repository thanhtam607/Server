import { INTEGER } from "sequelize";
import db from "../models";

let createCart = (data) => {
  return new Promise(async (resolve, reject) => {
    if (!data.id_user || !data.id_product || !data.quantity) {
      resolve("Missing required parameter");
    }
    let checkCart = await checkCartExist(data.id_user, data.id_product);
    if (checkCart) {
      let cart = await db.Cart.findOne({
        where: { id_user: data.id_user, id_product: data.id_product },
      });

      let quantity = parseInt(cart.quantity) + parseInt(data.quantity);
      cart.quantity = quantity;
      await cart.save();

      resolve("Update cart successfully");
    } else {
      try {
        let cart = await db.Cart.create({
          id_user: data.id_user,
          id_product: data.id_product,
          quantity: data.quantity,
          status: 0,
        });

        if (cart) {
          resolve("Create cart successfully");
        } else {
          resolve("Create cart failed");
        }
      } catch (e) {
        reject(e);
      }
    }
  });
};

let getAllCartsByIdUser = (id_user) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id_user) {
        resolve("Missing required parameter");
      }

      let carts = await db.Cart.findAll({
        where: { id_user: id_user },
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
      });

      resolve(carts);
    } catch (e) {
      reject(e);
    }
  });
};

let deleteCart = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve("Missing required parameter");
      }

      let cart = await db.Cart.findOne({
        where: { id: data.id },
      });

      if (!cart) {
        resolve("Cart not found");
      }

      await cart.destroy();

      resolve("Delete cart successfully");
    } catch (e) {
      reject(e);
    }
  });
};

let updateCart = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id || !data.quantity) {
        resolve("Missing required parameter");
      }

      let cart = await db.Cart.findOne({
        where: { id: data.id },
      });

      if (!cart) {
        resolve("Cart not found");
      }

      cart.quantity = data.quantity;
      await cart.save();

      resolve("Update cart successfully");
    } catch (e) {
      reject(e);
    }
  });
};

let updateStatusCart = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id || !data.status) {
        resolve("Missing required parameter");
      }

      let cart = await db.Cart.findOne({
        where: { id: data.id },
      });

      if (!cart) {
        resolve("Cart not found");
      }

      cart.status = data.status;
      await cart.save();

      resolve("Update status cart successfully");
    } catch (e) {
      reject(e);
    }
  });
};

let checkCartExist = (id_user, id_product) => {
  return new Promise(async (resolve, reject) => {
    try {
      let cart = await db.Cart.findOne({
        where: { id_user: id_user, id_product: id_product },
      });

      if (!cart) {
        resolve(false);
      } else {
        resolve(true);
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createCart: createCart,
  getAllCartsByIdUser: getAllCartsByIdUser,
  deleteCart: deleteCart,
  updateCart: updateCart,
  updateStatusCart: updateStatusCart,
};
