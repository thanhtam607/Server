"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bill_Detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bill_Detail.belongsTo(models.Product, {
        foreignKey: "id_product",
        as: "ProductData",
      });
      Bill_Detail.belongsTo(models.Bill, { foreignKey: "id", as: "BillData" });
    }
  }
  Bill_Detail.init(
    {
      // CREATE TABLE BILL_DETAIL(ID INT,
      //   ID_PRODUCT int,
      //   AMOUNT INT,
      //   NOTES LONGTEXT,
      //   PRICE int,
      //   CONSTRAINT f_mhdcthd FOREIGN KEY(ID_PRODUCT) REFERENCES PRODUCTS(ID),
      //   CONSTRAINT f_mspcthd FOREIGN KEY (ID) REFERENCES BILLS(ID));
      id_product: DataTypes.INTEGER,
      id_bill: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
      notes: DataTypes.TEXT,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Bill_Detail",
    }
  );
  return Bill_Detail;
};
