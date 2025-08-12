import { Router } from "express";
import { test } from "../controllers/productos.controllers.js";

const router = Router()

//get, post, delete, put o patch
router.route('/test').get(test)

export default router;