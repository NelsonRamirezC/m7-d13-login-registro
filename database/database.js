import Sequelize from "sequelize";

let database = process.env.DB_DATABASE;
let usuario = process.env.DB_USER;
let password = process.env.DB_PASSWORD;
let host = process.env.DB_HOST;
const sequelize = new Sequelize(database, usuario, password, {
    host,
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 3000,
    },
});

export default sequelize;
