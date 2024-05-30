import cartService from "../service/cartService";

let createCart = async (req, res) => {
  let message = await cartService.createCart(req.body);
  return res.status(200).json({
    errCode: 0,
    message: message,
  });
};

let getAllCartsByIdUser = async (req, res) => {
  let data = req.query;
  if (!data.id_user) {
    return res.status(200).json({
      errCode: 1,
      message: "Missing required parameter",
    });
  }

  let carts = await cartService.getAllCartsByIdUser(data.id_user);
  return res.status(200).json({
    errCode: 0,
    data: carts,
  });
};

let deleteCart = async (req, res) => {
  let message = await cartService.deleteCart(req.body);
  return res.status(200).json({
    errCode: 0,
    message: message,
  });
};

let updateCart = async (req, res) => {
  let message = await cartService.updateCart(req.body);
  return res.status(200).json({
    errCode: 0,
    message: message,
  });
};

let updateStatusCart = async (req, res) => {
  let message = await cartService.updateStatusCart(req.body);
  return res.status(200).json({
    errCode: 0,
    message: message,
  });
};

module.exports = {
  createCart: createCart,
  getAllCartsByIdUser: getAllCartsByIdUser,
  deleteCart: deleteCart,
  updateCart: updateCart,
  updateStatusCart: updateStatusCart,
};
