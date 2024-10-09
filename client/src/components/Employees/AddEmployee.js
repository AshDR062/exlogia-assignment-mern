// client/src/components/AddEmployee.js
import React, { useState } from "react";
import axios from "axios";
import { addEmployee } from "../../apiClient/apiClient";

const AddEmployee = ({ handleAdd, handleClose }) => {
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    email: "",
    age: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Adding Employee", employee);
    await handleAdd(employee);
    handleClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="fixed top-0 left-0 h-[100vh] w-[100vw] z-20 backdrop-brightness-50 flex justify-center items-center ">
      <section className="relative w-auto md:min-w-[500px] flex flex-col justify-start items-start bg-white rounded-lg overflow-auto">
        <button
          className="absolute top-2 right-2 text-white font-bold"
          type="button"
          onClick={handleClose}
        >
          x
        </button>
        <header className="w-full bg-gray-600 text-white py-4 text-center">
          Add Employee
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
            min={18}
            required
          />
          <button
            className="bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded text-white"
            type="submit"
          >
            Add Employee
          </button>
        </form>
      </section>
    </main>
  );
};

export default AddEmployee;
