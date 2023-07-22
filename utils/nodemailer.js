//password de app: owvmdkwfyallfghj
import nodemailer from "nodemailer";

let password = process.env.PASSWORD_GMAIL

const enviarCorreo = (nombre, apellido, correo, asunto, contenido) => {
    try {
        return new Promise((resolve, reject) => {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: "correpruebanodejs@gmail.com",
                    pass: password,
                },
                tls: {
                    rejectUnauthorized: false,
                },
            });

            const mailOptions = {
                from: '"Bot correos" <correpruebanodejs@gmail.com>',
                to: `"${nombre} ${apellido }" <${correo}>`,
                subject: asunto,
                text: "Su correo ha sido procesdo y se dará una respuesta a la brevedad.",
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log("Error al enviar el correo.", error);
                    reject();
                } else {
                    console.log("Correo enviado con éxito", info);
                    resolve("Correo enviado con éxito.");
                }
            });
        });
    } catch (error) {
        reject("Algo salió mal en el proceso de enviar el correo.");
    }
};


export default enviarCorreo;