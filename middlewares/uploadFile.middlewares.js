import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import { v4 as uuid } from "uuid";

const uploadFile = (req, res, next) => {
    try {
        if (!req.files?.imagen) {
            return next();
        }

        let imagen = req.files.imagen;

        //VALIDACIÓN TAMAÑO DE ARCHIVO
        let limiteMb = 1;
        let limite = limiteMb * 1024 * 1024;
        if (imagen.size > limite) {
            return res.status(413).json({
                code: 413,
                message: `Archivo supera el tamaño permitido de: ${limiteMb}mbs.`,
            });
        }

        let prefijo = uuid().slice(0, 10);
        let extension = imagen.mimetype.split("/")[1]
        let nombreImagen = `IMG-${prefijo}.${extension}`;
        
        let formatosPermitidos = ["jpeg", "svg", "png", "webp"];

        if (!formatosPermitidos.includes(extension)) {
            return res.status(400).json({
                code: 400,
                message:
                    "Formato de archivo no permitido, formatos permitidos: " +
                    formatosPermitidos.join(" - "),
            });
        }

        imagen.mv(path.resolve(__dirname, "../public/uploads/" + nombreImagen), (error) => {
            if (error)
            {
                return res.status(500).json({
                    code: 500,
                    message: "Error al guardar la imagen.",
                });
            }

            req.nombreImagen = nombreImagen;
            next();
        });
    } catch (error) {
        console.log(error)
         return res.status(500).json({
            code: 500,
            message: "Error al subir la imagen.",
        });
    }
};

let upload = {
    uploadFile,
};

export default upload;
