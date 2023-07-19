import { Router } from "express";
import controllerUsuarios from "../controllers/usuarios.controllers.js";
const router = Router();

router.post("/", controllerUsuarios.registro);

export default router;
