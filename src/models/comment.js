"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.Product, {
        foreignKey: "id_user",
        as: "UserData",
      });
      Comment.belongsTo(models.Product, {
        foreignKey: "id_product",
        as: "ProductData",
      });
    }
  }
  Comment.init(
    {
      id_user: DataTypes.INTEGER,
      id_product: DataTypes.INTEGER,
      comment: DataTypes.TEXT,
      date: DataTypes.DATE,
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
