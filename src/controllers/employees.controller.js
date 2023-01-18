//const fs = require("fs");
const employeesCtrl = {};

const Employee = require("../models/Employees.js");

employeesCtrl.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const employee = await Employee.findOne({ email, password });
    if (employee) {
      res.status(200).send(employee);
    } else {
      res.status(404).send({ message: "not found" });
    }
  } catch (error) {
    res.json(error);
  }
};

employeesCtrl.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.json(error);
  }
};

employeesCtrl.createEmployee = async (req, res) => {
  const {
    name,
    surname,
    role,
    phone,
    division,
    subdivision,
    email,
    password,
    url_photo,
    biography,
  } = req.body;

  const newEmployee = new Employee({
    name,
    surname,
    role,
    phone,
    division,
    subdivision,
    email,
    password,
    url_photo,
    biography,
  });

  try {
    const result = await newEmployee.save();
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

employeesCtrl.updateEmployee = async (req, res) => {
  const {
    name,
    surname,
    role,
    phone,
    division,
    subdivision,
    email,
    password,
    url_photo,
    biography,
  } = req.body;

  try {
    await Employee.findByIdAndUpdate(req.params.id, {
      name,
      surname,
      role,
      phone,
      division,
      subdivision,
      email,
      password,
      url_photo,
      biography,
    });

    res.json({ message: "Empleado actualizado con éxito" });
  } catch (error) {
    res.json(error);
  }
};

employeesCtrl.getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
  } catch (error) {
    res.json(error);
  }
};

employeesCtrl.deleteEmployee = async (req, res) => {
  try {
    const del = await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: "Empleado eliminado con éxito" });
  } catch (error) {
    res.json(error);
  }
};

// productsCtrl.getProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (error) {
//     res.json(error);
//   }
// };

// productsCtrl.getProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     res.json(product);
//   } catch (error) {
//     res.json(error);
//   }
// };

// productsCtrl.createProduct = async (req, res) => {
//   const { file, categoria, nombre, precio, descripcion, url } = req.body;

//   const newProduct = new Product({
//     file,
//     categoria,
//     nombre,
//     precio,
//     descripcion,
//     url,
//   });

//   try {
//     const result = await newProduct.save();
//     res.json(result);
//   } catch (error) {
//     res.json(error);
//   }
// };

// productsCtrl.updateProduct = async (req, res) => {
//   const { file, categoria, nombre, precio, descripcion, url } = req.body;

//   const upd = await Product.findById(req.params.id);
//   const updfile = upd.file;
//   //console.log(req.body)
//   if (updfile != file) {
//     fs.unlink(`src/public/img/products/${updfile}`, function (err) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("Imagen borrada de base de datos");
//       }
//     });
//   }

//   try {
//     await Product.findByIdAndUpdate(req.params.id, {
//       file,
//       categoria,
//       nombre,
//       precio,
//       descripcion,
//       url,
//     });

//     res.json({ message: "Producto actualizado con éxito" });
//   } catch (error) {
//     res.json(error);
//   }
// };

// productsCtrl.deleteProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     const file = product.file;

//     const del = await Product.findByIdAndDelete(req.params.id);
//     if (del) {
//       fs.unlink(`src/public/img/products/${file}`, function (err) {
//         if (err) {
//           console.log(err);
//         }
//         console.log("Imagen borrada de base de datos");
//       });
//     }

//     res.json({ message: "Producto eliminado con éxito" });
//   } catch (error) {
//     res.json(error);
//   }
// };

module.exports = employeesCtrl;
