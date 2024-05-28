const Sequelize = require("sequelize");
const database = require("./../database/DB");

const Teste = database.define(
    "teste",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        deleted_at: {
            type: Sequelize.DATE,
        },
    },
    {
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

module.exports = Teste;