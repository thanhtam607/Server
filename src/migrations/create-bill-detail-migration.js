"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Bill_Details", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true, //không phải khóa chính mới đúng
        type: Sequelize.INTEGER,
      },
      // viết dùm tối cái này
      // id_product: DataTypes.INTEGER,
      // amount: DataTypes.INTEGER,
      // notes: DataTypes.TEXT,
      // price: DataTypes.INTEGER
      id_product: {
        type: Sequelize.INTEGER,
      },
      id_bill: {
        type: Sequelize.INTEGER,
      },
      amount: {
        type: Sequelize.INTEGER,
      },
      notes: {
        type: Sequelize.TEXT,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Bill_Details");
  },
};
