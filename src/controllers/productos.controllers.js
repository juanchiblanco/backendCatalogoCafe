import Producto from "../models/producto.js";

export const test = (req, res) => {
  res.status(200);
  res.send("Primera prueba desde el backend");
};

export const leerProductos = (req, res) => {};

export const crearProducto = async (req, res) => {
  try {
    //recibir el objeto que tengo que agregar
    // console.log(req.body);
    //validar los datos del objeto
    //guardar el objeto en la BD
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    //contestar al frontend si funciono o no
    res.status(201).json({ mensaje: "El producto fue creado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear el producto" });
  }
};

//agregar funciones para CRUD
