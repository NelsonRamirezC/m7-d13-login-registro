import { Router } from "express";
import controllers from "../controllers/reclamos.controllers.js"

const router = Router();

router.post("/", controllers.procesarReclamo);

export default router;
