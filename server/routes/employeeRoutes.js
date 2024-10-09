const express = require("express");
const router = express.Router();
const EmployeeController = require("../controllers/EmployeeController");

/* ROutes */

router.get("/getAllempyees", EmployeeController.getAllEmployees);
router.get("/getEmployee/:id", EmployeeController.getEmployeeById);
router.post("/addEmployee", EmployeeController.addEmployee);
router.put("/editEmployee/:id", EmployeeController.editEmployee);
router.delete("/deleteEmployee/:id", EmployeeController.hardDeleteEmployee);
router.put("/softDeleteEmployee/:id", EmployeeController.softDeleteEmployee);

module.exports = router;
