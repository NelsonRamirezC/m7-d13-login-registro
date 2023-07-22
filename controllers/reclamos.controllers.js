import mailer from "../utils/nodemailer.js"

const procesarReclamo = (req, res) => {

    let { nombre, apellido, correo, asunto, contenido } = req.body;
    mailer(nombre, apellido, correo, asunto, contenido);
    console.log(req.body);
    res.render("reclamos", {
        message: "Reclamo realizado con éxito, su solicitud será procesada entre 48 y 72 horas."
    })
}

let controladores = {
    procesarReclamo,
};

export default controladores;
