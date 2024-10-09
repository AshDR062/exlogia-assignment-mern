// client/src/components/EditEmployee.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getEmployee, updateEmployee } from "../../apiClient/apiClient";

const EditEmployee = ({ id, handleEdit, handleClose }) => {
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    email: "",
    age: "",
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      const response = await getEmployee(id);
      console.log("Employee Data: ", id, response);
      setEmployee(response);
    };
    fetchEmployee();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleEdit(id, employee);
    handleClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed top-0 left-0 backdrop-brightness-50 h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="relative h-auto md:min-h-[500px] w-[500px] bg-white text-black rounded-lg flec flex-col">
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-2 right-2 text-white font-bold"
        >
          x
        </button>
        <header className="w-full bg-gray-600 text-white py-4 text-center ">
          Edit Employee
        </header>
        <form
          className="flex flex-col justify-start items-start px-2 py-2 gap-2"
          onSubmit={handleSubmit}
        >
          <input
            className="border border-gray-400  py-2 px-2 rounded-md"
            type="number"
            name="id"
            placeholder="ID"
            value={employee.id}
            onChange={handleChange}
            required
          />
          <input
            className="border border-gray-400  py-2 px-2 rounded-md"
            type="text"
            name="name"
            placeholder="Name"
            value={employee.name}
            onChange={handleChange}
            required
          />
          <input
            className="border border-gray-400  py-2 px-2 rounded-md"
            type="email"
            name="email"
            placeholder="Email"
            value={employee.email}
            onChange={handleChange}
            required
          />
          <input
            className="border border-gray-400  py-2 px-2 rounded-md"
            type="number"
            name="age"
            placeholder="Age"
            value={employee.age}
            onChange={handleChange}
            required
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white"
            type="submit"
          >
            Update Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
