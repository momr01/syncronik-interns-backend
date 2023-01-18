const { Router } = require("express");
const router = Router();

const {
  login,
  getEmployees,
  createEmployee,
  updateEmployee,
  getEmployee,
  deleteEmployee,
} = require("../controllers/employees.controller");

router.route("/login").post(login);

router.route("/").get(getEmployees).post(createEmployee);

router
  .route("/:id")
  .put(updateEmployee)
  .get(getEmployee)
  .delete(deleteEmployee);

// router.route("/:id")
//   .get(getEmployee)
//   .put(updateEmployee)
//   .delete(deleteEmployee)

module.exports = router;
