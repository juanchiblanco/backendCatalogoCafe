import Producto from "../models/producto.js";

export const test = (req, res) => {
  res.status(200);
  res.send("Primera prueba desde el backend");
};

export const leerProductos = async (req, res) => {
  try {
    //Buscar todos los productos en la base de datos
    const listaProductos = await Producto.find();
    //enviar la respuesta al front
    res.status(200).json(listaProductos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al leer los productos" });
  }
};

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

export const leerProductoPorId = async (req, res) => {
  try {
    //obtener parametro del request
    console.log(req.params);
    console.log(req.params.id);
    //pedir a mongoose que lo encuentre
    const productoBuscado = await Producto.findById(req.params.id);
    if (!productoBuscado) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    //contestar al front
    res.status(200).json(productoBuscado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener el producto" });
  }
};

export const borrarProducto = async (req,res) => {
  try {
    //buscar prodcuto por id
    const productoBorrado = await Producto.findByIdAndDelete(req.params.id);
    if (!productoBorrado) {
      return res.status(404).json({ mensaje: "No se encontro el producto y no pudimos borrarlo" });
    }
    //responder al front
    res.status(200).json({mensaje: 'Producto eliminado exitosamente'});
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al borrar el producto" });
  }
}
