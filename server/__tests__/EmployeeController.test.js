// server/__tests__/EmployeeController.test.js
const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../server"); // Your Express app
const Employee = require("../models/Employee");

beforeAll(async () => {
  const url = process.env.MONGODB_URI;
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

beforeEach(async () => {
  await Employee.deleteMany({});
});

describe("EmployeeController", () => {
  /* Test for creating new employee */
  it("should create a new employee", async () => {
    const newEmployee = {
      id: 4,
      name: "John Doe",
      email: "john@example.com",
      age: 30,
    };

    const response = await request(app)
      .post("/api/employees/addEmployee")
      .send(newEmployee);

    expect(response.status).toBe(201);
    expect(response.body.id).toBe(newEmployee.id);
    expect(response.body.name).toBe(newEmployee.name);
    expect(response.body.email).toBe(newEmployee.email);
    expect(response.body.age).toBe(newEmployee.age);
  });

  /* Test for Getting All the employees data */
  it("should retrieve all employees", async () => {
    const employee1 = new Employee({
      id: 5,
      name: "Jane Doe",
      email: "jane@example.com",
      age: 28,
    });
    const employee2 = new Employee({
      id: 6,
      name: "John Smith",
      email: "johnsmith@example.com",
      age: 35,
    });
    await employee1.save();
    await employee2.save();

    const response = await request(app).get("/api/employees/getAllempyees");

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
  });

  /* Test for updating an employee data */
  it("should update an employee", async () => {
    const employee = new Employee({
      id: 7,
      name: "Mark Doe",
      email: "mark@example.com",
      age: 45,
    });
    await employee.save();

    const updatedData = {
      id: 7,
      name: "Mark Updated",
      email: "markupdated@example.com",
      age: 46,
    };

    const response = await request(app)
      .put(`/api/employees/editEmployee/${employee.id}`)
      .send(updatedData);

    expect(response.status).toBe(200);
    expect(response.body.age).toBe(updatedData.age);
    expect(response.body.name).toBe(updatedData.name);
    expect(response.body.email).toBe(updatedData.email);
  });

  it("should soft delete an employee", async () => {
    const employee = new Employee({
      name: "Mark Doe",
      id: 8,
      email: "mark@example.com",
      age: 45,
      isDeleted: false,
    });
    await employee.save();

    const updatedData = {
      ...employee,
      isDeleted: true,
    };

    const response = await request(app)
      .put(`/api/employees/editEmployee/${employee._id}`)
      .send(updatedData);

    expect(response.status).toBe(200);
    expect(response.body.isDeleted).toBe(updatedData.isDeleted);
  });

  it("should delete an employee", async () => {
    const employee = new Employee({
      id: 9,
      name: "Delete Me",
      email: "delete@example.com",
      age: 50,
    });
    await employee.save();

    const response = await request(app).delete(
      `/api/employees/deleteEmployee/${employee._id}`
    );

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Employee deleted");

    const deletedEmployee = await Employee.findById(employee._id);
    expect(deletedEmployee).toBeNull();
  });
});
