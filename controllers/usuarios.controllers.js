import Usuario from "../models/Usuario.models.js"
const registro = async (req, res) => {
    try {
        let { nombre, apellido, email, password } = req.body;
        await Usuario.create({
            nombre,
            apellido,
            email,
            password,
        });
        res.status(201).json({
            code: 201,
            message: "Usuario registrado con éxito.",
        });
    } catch (error) {
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
