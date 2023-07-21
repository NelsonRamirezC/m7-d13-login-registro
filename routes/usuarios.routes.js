import { Router } from "express";
import controllerUsuarios from "../controllers/usuarios.controllers.js";
import auth from "../middlewares/auth.middlewares.js";
import upload from "../middlewares/uploadFile.middlewares.js";
const router = Router();

router.post("/", upload.uploadFile, controllerUsuarios.registro);
router.post("/login", auth.emitToken, controllerUsuarios.login);

export default router;
