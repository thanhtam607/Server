'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // viết dùm tối cái này
      // id_type: DataTypes.INTEGER,
      // name: DataTypes.STRING,
      // size: DataTypes.STRING,
      // weight: DataTypes.STRING,
      // description: DataTypes.LONGTEXT,
      // introduction: DataTypes.LONGTEXT,
      // price: DataTypes.FLOAT,
      // status: DataTypes.INTEGER,

      id_type: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      introduction: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.FLOAT
      },
      status: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};