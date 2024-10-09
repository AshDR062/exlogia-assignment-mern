const Employee = require("../models/Employee");

// Get all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get an employee by ID
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new employee
exports.addEmployee = async (req, res) => {
  const { id, name, email, age } = req.body;
  const employee = new Employee({ id, name, email, age });
  try {
    const savedEmployee = await employee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Edit an existing employee
exports.editEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Hard Delete an employee
exports.hardDeleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: "Employee deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Soft Delete an employee
exports.softDeleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    );
    res.json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
