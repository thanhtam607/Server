'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Cart,{foreignKey:'id_user',as:'cartData'})
      User.hasMany(models.Bill,{foreignKey:'id_user',as:'billData'})
      User.hasMany(models.Comment,{foreignKey:'id_user',as:'commentData'})
    }
  };
  User.init({
      email: DataTypes.STRING,
      pass: DataTypes.STRING,
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      role: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};