import billService from "../service/billService";

let getAllBillsByIdUser = async (req, res) => {
  let data = req.query;
  if (!data.id_user) {
    return res.status(200).json({
      errCode: 1,
      message: "Missing required parameter",
    });
  }

  let bills = await billService.getAllBillsByIdUser(data.id_user);
  return res.status(200).json({
    errCode: 0,
    data: bills,
  });
};

let getBillById = async (req, res) => {
  let data = req.query;
  if (!data.id) {
    return res.status(200).json({
      errCode: 1,
      message: "Missing required parameter",
    });
  }

  let bill = await billService.getBillById(data.id);
  return res.status(200).json({
    errCode: 0,
    data: bill,
  });
};

let updateStatusBill = async (req, res) => {
  let data = req.body;
  if (!data.id || !data.status) {
    return res.status(200).json({
      errCode: 1,
      message: "Missing required parameter",
    });
  }
  let message = await billService.updateStatusBill(data);
  return res.status(200).json({
    errCode: 0,
    message: message,
  });
};
let createBill = async (req, res) => {
  let data = await billService.createBill(req.body);

  return res.status(200).json({
    errCode: data.errCode,
    message: data.message,
  });
}


module.exports = {
  getAllBillsByIdUser: getAllBillsByIdUser,
  getBillById: getBillById,
  updateStatusBill: updateStatusBill,
  createBill: createBill,
};
