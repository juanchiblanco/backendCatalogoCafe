import { Router } from "express";
import { crearProducto, leerProductos, test, leerProductoPorId } from "../controllers/productos.controllers.js";

const router = Router()

//get, post, delete, put o patch
router.route('/test').get(test)
router.route('/').get(leerProductos).post(crearProducto)
router.route('/:id').get(leerProductoPorId)

export default router;