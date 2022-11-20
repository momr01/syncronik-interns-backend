const { Router } = require("express");
const router = Router();

const {
  getEmployees,
  createEmployee,
  updateEmployee,
  getEmployee,
  deleteEmployee,
} = require("../controllers/employees.controller");

router
    .route("/")
    .get(getEmployees)
    .post(createEmployee);

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
