import app from "./app.js";
import db from "./database/database.js";
import dotenv from "dotenv";
dotenv.config();
//modelos
//import "./src/models/asociaciones.js";

const PORT = process.env.PORT;
const main = async () => {
    try {
        await db.authenticate();
        await db.sync({ force: true, alter: true });
        console.log("Base de datos conectada.");
        app.listen(PORT, () => {
            console.log("Servidor escuchando en puerto: " + PORT);
        });
    } catch (error) {
        console.log("Ha ocurrido un error: ", error);
    }
};

main();
