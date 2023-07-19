import { Router } from "express";
import controllerViews from "../controllers/views.controllers.js"
const router = Router();

router.get(["/", "/home"], controllerViews.home);

export default router;
