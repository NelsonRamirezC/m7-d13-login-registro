import { Router } from "express";
import controllerViews from "../controllers/views.controllers.js"
import auth from "../middlewares/auth.middlewares.js"
const router = Router();

router.get(["/", "/home"], controllerViews.home);
router.get("/login", controllerViews.login);
router.get("/registro", controllerViews.registro);

router.get("/perfil/:token", auth.verifyToken, controllerViews.perfil);


export default router;
