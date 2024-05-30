import express from "express";
import homeController from "../controller/homeController";
import productController from "../controller/productController";
import cartController from "../controller/cartController";
import categoryController from "../controller/categoryController";
import billController from "../controller/billController";
import userController from "../controller/userController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);

  // User
  router.post("/api/register", userController.handleCreateNewUser);
  router.post("/api/login", userController.userLogin);

  router.get("/api/getListProducts", productController.getListProducts);
  router.get("/api/getProductById", productController.getProductById);
  router.get(
    "/api/getAllProductsByIdCategory",
    productController.getAllProductsByIdCategory
  );

  // get product by keyword
  router.get(
    "/api/getProductsByKeyword",
    productController.getProductsByKeyword
  );

  router.post("/api/createCart", cartController.createCart);
  router.get("/api/getAllCartsByIdUser", cartController.getAllCartsByIdUser);
  router.post("/api/deleteCart", cartController.deleteCart);
  router.post("/api/updateCart", cartController.updateCart);
  router.post("/api/updateStatusCart", cartController.updateStatusCart);

  // Caterory
  router.get("/api/getAllCategories", categoryController.getAllCategories);
  router.post("/api/createCategory", categoryController.createCategory);
  router.post("/api/updateCategory", categoryController.updateCategory);
  router.post("/api/deleteCategory", categoryController.deleteCategory);

  // get bills by id user
  router.get("/api/getAllBillsByIdUser", billController.getAllBillsByIdUser);
  router.get("/api/getBillById", billController.getBillById);
  // update status bill
  router.post("/api/updateStatusBill", billController.updateStatusBill);
  router.post("/api/createBill", billController.createBill)
  return app.use("/", router);
};
module.exports = initWebRoutes;
 