import db from "../models/index";

let getProductById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const product = await db.Product.findOne({
        attributes: { exclude: ["id_product"] },
        where: { id: id },
        raw: true,
        include: [
          {
            model: db.Product_Img,
            as: "productImageData",
            attributes: ["img"],
          },
        ],
      });
      const data = {
        errCode: 0,
        message: "OK",
        product,
      };
      resolve(data);
    } catch (error) {
      const data = {
        errCode: 1,
        message: "error from server",
      };
      reject(data);
    }
  });
};

module.exports = {
  getProductById: getProductById,
};
