import nodemailer from "nodemailer";
import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
                to: `"${nombre} ${apellido}" <${correo}>`,
                subject: asunto,
                html: `
                        <h1>Titulo de mensaje.</h1>
                        <div>
                            <img src="cid:imgavatar" alt="avatar.jpg"/>
                        </div>
                        <p>Gracias por preferirnos...</p>
                        
                `,
                attachments: [
                    {
                        filename: "avatar.jpg",
                        path: path.resolve(
                            __dirname,
                            "../public/uploads/avatar.jpg"
                        ),
                        cid: "imgavatar",
                    },
                ],
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