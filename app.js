import express from "express";
import cors from "cors";
import morgan from "morgan";
import { create } from "express-handlebars";

import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//IMPORTACIÓN DE RUTAS
import viewsRoutes from "./routes/views.routes.js";

const app = express();


app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//condiguración handlebars

const hbs = create({
    partialsDir: [path.resolve(__dirname, "./views/partials/")],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));


//rutas de vistas
app.use("/", viewsRoutes);



export default app;