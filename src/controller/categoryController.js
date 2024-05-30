import categoryService from "../service/categoryService.js";

let getAllCategories = async (req, res) => {
  let response = await categoryService.getAllCategories();
  return res.status(200).json(response);
};

let createCategory = async (req, res) => {
  let message = await categoryService.createCategory(req.body);
  return res.status(200).json({
    errCode: 0,
    message: message,
  });
};

let updateCategory = async (req, res) => {
  let message = await categoryService.updateCategory(req.body);
  return res.status(200).json({
    errCode: 0,
    message: message,
  });
};

let deleteCategory = async (req, res) => {
  let message = await categoryService.deleteCategory(req.body);
  return res.status(200).json({
    errCode: 0,
    message: message,
  });
};

module.exports = {
  createCategory: createCategory,
  getAllCategories: getAllCategories,
  updateCategory: updateCategory,
  deleteCategory: deleteCategory,
};
