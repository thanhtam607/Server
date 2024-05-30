'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // viết dùm tối cái này
      // email: DataTypes.STRING,
      // export_date: DataTypes.DATE,
      // notes: DataTypes.TEXT,
      // pro_bill: DataTypes.FLOAT,
      // fee_bill: DataTypes.FLOAT,
      // status: DataTypes.INT,

      id_user: {
        type: Sequelize.INTEGER
      },
      fullname: {
        type: Sequelize.TEXT
      },
      phone_number: {
        type: Sequelize.TEXT
      },
      address:{
        type: Sequelize.TEXT
      },
      notes: {
        type: Sequelize.TEXT
      },
      pro_bill: {
        type: Sequelize.FLOAT
      },

      fee_bill: {
        type: Sequelize.FLOAT
      },
      payment: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Bills');
  }
};