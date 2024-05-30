import db from "../models";

let getAllCategories = async (req, res) => {
  return new Promise(async (resolve, reject) => {
    try {
      let categories = await db.Category.findAll(
        { where: { status: "1" } },
        { raw: true }
      );

      if (!categories || categories.length === 0) {
        resolve({
          errCode: 1,
          message: "Không có danh mục nào",
        });
      }
      resolve({
        errCode: 0,
        data: categories,
      });
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};

let createCategory = (data) => {
  return new Promise(async (resolve, reject) => {
    if (!data.name) {
      resolve("Missing required parameter");
    }

    try {
      let category = await db.Category.create({
        name: data.name,
        status: 1,
      });

      if (category) {
        resolve("Create category successfully");
      } else {
        resolve("Create category failed");
      }
    } catch (e) {
      reject(e);
    }
  });
};

let updateCategory = (data) => {
  return new Promise(async (resolve, reject) => {
    if (!data.id || !data.name) {
      resolve("Missing required parameter");
    }

    try {
      let category = await db.Category.findOne({
        where: { id: data.id },
      });

      if (category) {
        category.name = data.name;
        category.save();

        resolve("Update category successfully");
      } else {
        resolve("Category not found");
      }
    } catch (e) {
      reject(e);
    }
  });
};

let deleteCategory = (data) => {
  return new Promise(async (resolve, reject) => {
    if (!data.id) {
      resolve("Missing required parameter");
    }

    try {
      let category = await db.Category.findOne({
        where: { id: data.id },
      });

      if (category) {
        category.status = 0;
        category.save();

        resolve("Delete category successfully");
      } else {
        resolve("Category not found");
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  getAllCategories: getAllCategories,
  createCategory: createCategory,
  updateCategory: updateCategory,
};
