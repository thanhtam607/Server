"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.User, { foreignKey: "id_user", as: "UserData" });
      Cart.belongsTo(models.Product, {
        foreignKey: "id_product",
        as: "ProductData",
      });
    }
  }
  Cart.init(
    {
      id_user: DataTypes.INTEGER,
      id_product: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );
  return Cart;
};
