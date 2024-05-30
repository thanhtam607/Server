'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Discounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // viết dùm tối cái này
      // id_product: DataTypes.INTEGER,
      // discount: DataTypes.FLOAT,
      // startDate: DataTypes.DATE,
      // expiryDate: DataTypes.DATE

      id_: {
        type: Sequelize.INTEGER
      },
      discount: {
        type: Sequelize.FLOAT
      },
      startDate: {
        type: Sequelize.DATE
      },
      expiryDate: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Discounts');
  }
};