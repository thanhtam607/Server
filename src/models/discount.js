"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Discount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Discount.belongsTo(models.Product, {
        foreignKey: "id_product",
        as: "ProductData",
      });
    }
  }
  Discount.init(
    {
      // insert into discounts(ID_PRODUCT, discount, startDATE, expiryDate)
      id_product: DataTypes.INTEGER,
      discount: DataTypes.FLOAT,
      startDate: DataTypes.DATE,
      expiryDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Discount",
    }
  );
  return Discount;
};
