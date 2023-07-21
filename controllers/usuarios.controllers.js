import Usuario from "../models/Usuario.models.js";
import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import fs from "fs";


const registro = async (req, res) => {
    try {
        let { nombre, apellido, email, password } = req.body;
        await Usuario.create({
            nombre,
            apellido,
            email,
            imagen: req.nombreImagen,
            password,
        });
        res.status(201).json({
            code: 201,
            message: "Usuario registrado con éxito.",
        });
    } catch (error) {
        console.log(error);
        if (req.nombreImagen) {
            try {
               fs.unlinkSync(path.resolve(__dirname, "../public/uploads/", req.imagen)); 
            } catch (error) {
                console.log("no se puedo borrar la foto.");
            }
        }
       
        res.status(500).json({
            code: 500,
            message: "Error al crear el usuario.",
        });
    }
}

const login = async (req, res) => {
    try {
        res.status(200).json({
            code: 200,
            message: "Login éxitoso.",
            token: req.token,
            usuario: req.usuario
        });

    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Error en el proceso de autenticación.",
        });
    }
}


let controladores = {
    registro,
    login
};

export default controladores;
