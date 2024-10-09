// client/src/components/EmployeeList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  addEmployee,
  getAllEmployees,
  hardDeleteEmployee,
  updateEmployee,
} from "../apiClient/apiClient";
import EditEmployee from "../components/Employees/EditEmployee";
import DeleteEmployee from "../components/Employees/DeleteEmployee";
import AddEmployee from "../components/Employees/AddEmployee";
import Employee from "../components/Employees/Employee";

const EmployeeList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  /* Fetching All the Employees */

  useEffect(() => {
    const fetchEmployees = async () => {
      setIsLoading(true);
      try {
        const response = await getAllEmployees();
        setEmployees(response);
        setIsLoading(false);
      } catch (error) {
        console.error("Error in fetching/setting the Employee", error);
      }
      setIsLoading(false);
    };
    fetchEmployees();
  }, []);

  /* Handle add Emplyee */
  const handleAdd = async (data) => {
    try {
      await addEmployee(data);
      try {
        const response = await getAllEmployees();
        setEmployees(response);
        setIsLoading(false);
      } catch (error) {
        console.error("Error in fetching/setting the Employee", error);
      }
      // setEmployees([...employees, data]);
    } catch (error) {
      console.error("Error in adding the Employee", error);
    }
  };

  /* Handling Hard Delete Emplyee */
  const handleDelete = async (id) => {
    try {
      await hardDeleteEmployee(id);
      setEmployees(employees.filter((employee) => employee._id !== id));
      try {
        const response = await getAllEmployees();
        setEmployees(response);
        setIsLoading(false);
      } catch (error) {
        console.error("Error in fetching/setting the Employee", error);
      }
      setSelectedEmployee(null);
    } catch (error) {
      console.error("Error in deleting the Employee", error);
    }
    setEmployees(employees.filter((employee) => employee._id !== id));
  };

  /* Handling Editiing An Emplee Data */
  const handleEdit = async (id, data) => {
    try {
      await updateEmployee(id, data);
      try {
        const response = await getAllEmployees();
        setEmployees(response);
        setIsLoading(false);
      } catch (error) {
        console.error("Error in fetching/setting the Employee", error);
      }
      setSelectedEmployee(null);
    } catch (error) {
      console.error("Error in editing the Employee", error);
    }
  };

  /* Handling Open and Close Modals */

  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };
  const toggleDeleteModal = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header className="py-4 w-full text-center text-xl bg-gray-600 text-white">
        Employee List
      </header>

      <button
        type="button"
        onClick={toggleAddModal}
        className="bg-blue-400 text-white hover:bg-blue-500 rounded-lg px-4 py-2"
      >
        Add Employee
      </button>
      <div className="w-full bg-gray-600 p-4 text-white flex flex-row">
        <div className="text-center w-1/6">ID</div>
        <div className="text-center w-1/4">Name</div>
        <div className="text-center w-1/4">Email</div>
        <div className="text-center w-1/6">Age</div>
        <div className="text-center w-1/6">Edit</div>
        <div className="text-center w-1/6">Delete</div>
      </div>
      <ul className="flex flex-col gap-2 ">
        {employees?.map((employee) => (
          <li
            className="flex w-full justify-start items-center gap-2"
            key={employee._id}
          >
            <Employee
              data={employee}
              key={employee._id}
              onEdit={(id) => {
                setSelectedEmployee(id);
                toggleEditModal();
              }}
              onDelete={(id) => {
                setSelectedEmployee(id);
                toggleDeleteModal();
              }}
            />
          </li>
        ))}
      </ul>
      {isAddModalOpen && (
        <AddEmployee handleAdd={handleAdd} handleClose={toggleAddModal} />
      )}
      {isDeleteModalOpen && (
        <DeleteEmployee
          id={selectedEmployee}
          handleDelete={handleDelete}
          handleClose={toggleDeleteModal}
        />
      )}

      {isEditModalOpen && (
        <EditEmployee
          id={selectedEmployee}
          handleEdit={handleEdit}
          handleClose={toggleEditModal}
        />
      )}
    </div>
  );
};

export default EmployeeList;
