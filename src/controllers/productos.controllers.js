export const test = (req, res) => {
  res.status(200);
  res.send("Primera prueba desde el backend");
};

export const leerProductos = (req, res) => {};

export const crearProducto = async (req, res) => {
  try {
    //recibir el objeto que tengo que agregar
    console.log(req.body)
    //validar los datos del objeto
    //guardar el objeto en la BD
    //contestar al frontend si funciono o no
  } catch (error) {
    console.error(error);
  }
};

//agregar funciones para CRUD
