const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.BACK_DB_DATABASE,
  process.env.BACK_DB_USER,
  process.env.BACK_DB_PASS,
  {
    dialect: process.env.BACK_DB_DIALECT,
    host: process.env.BACK_DB_HOST,
    port: process.env.BACK_DB_PORT,
  }
);

module.exports = sequelize;