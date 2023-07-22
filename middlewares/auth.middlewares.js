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
        return res
            .status(400)
            .json({ code: 400, message: "Usuario o contraseña invalidos." });
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

const verifyToken = (req, res, next) => {
    let baseUrl = req.baseUrl;
    let { token } = req.params;
    let authorization = req.headers.authorization;
    if (!token) {
        try {
            token = authorization.split(" ")[1];
            if (!token) {
                throw new Error("sin token");
            }
        } catch (error) {
            if (baseUrl.includes("api")) {
                return res.status(400).json({
                    code: 400,
                    message: "Debe proporcionar un token para acceder.",
                });
            } else {
                res.render("error", {
                    error: "Debe proporcionar un token para acceder",
                });
            }
        }
    }

    jwt.verify(token, process.env.SECRET, async (error, decoded) => {
        let hostname = req.hostname;
        if (error) {
            
            if (hostname.includes("api")) {
                return res.status(401).json({
                    code: 401,
                    message: "El token proporcionado es inválido.",
                });
            } else {
                return res.render("error", {
                    error: "El token proporcionado es inválido.",
                });
            }
        }
        let datosUsuarioToken = decoded.usuario;
        let usuario = await Usuario.findByPk(datosUsuarioToken.id);
        usuario = usuario.toJSON();
        req.usuario = usuario;
        next();
    });
};

let auth = {
    emitToken,
    verifyToken,
};

export default auth;
