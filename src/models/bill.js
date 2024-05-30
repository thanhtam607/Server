'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bill.belongsTo(models.User,{foreignKey:'id_user',as:'UserData'})
      Bill.hasMany(models.Bill_Detail,{foreignKey:'id_bill',as:'billDetailData'})
    }
  };
  Bill.init({
     id_user: DataTypes.INTEGER,
      fullname: DataTypes.TEXT,
     phone_number: DataTypes.TEXT,
      address:DataTypes.TEXT,
     notes: DataTypes.TEXT,
     pro_bill: DataTypes.FLOAT,
     fee_bill: DataTypes.FLOAT,
     payment: DataTypes.INTEGER,
     status: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Bill',
  });
  return Bill;
};