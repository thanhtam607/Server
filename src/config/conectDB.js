

const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('cake_shop', 'thuy2024', 1234567, {
    host: '103.9.159.202',
    dialect: 'mysql',
    logging: false
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connectDB;