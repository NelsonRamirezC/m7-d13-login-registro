import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario.models.js";


const emitToken = async (req, res, next) => {
    let { email, password } = req.body;
    
    let usuario = await Usuario.findOne({
        where: {
            email,
            password,
        },
    });
    
    if (!usuario) {
        return res.status(400).json({code: 400, message: "Usuario o contraseña invalidos." })
    }

    usuario = usuario.toJSON();
    delete usuario.password;


    let token = jwt.sign(
        {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            usuario,
        },
        process.env.SECRET
    );

    req.token = token;
    req.usuario = usuario;
    next();
};



let auth = {
    emitToken,
}

export default auth;