import { Router } from "express";
import controllerViews from "../controllers/views.controllers.js"
const router = Router();

router.get(["/", "/home"], controllerViews.home);
router.get("/login", controllerViews.login);

export default router;
