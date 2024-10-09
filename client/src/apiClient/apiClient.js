import axiosClient from "./axios";

/* Fetching All the Employees */
export const getAllEmployees = async () => {
  try {
    const response = await axiosClient.get("/employees/getAllempyees");
    return response?.data;
  } catch (error) {
    console.error("Error fetching employees:", error);
  }
};

/* Fetching a single Emplyee */
export const getEmployee = async (id) => {
  try {
    const response = await axiosClient.get(`/employees/getEmployee/${id}`);
    return response?.data;
  } catch (error) {
    console.error("Error fetching employee:", error);
  }
};

/* Add a new Employee */
export const addEmployee = async (data) => {
  try {
    console.log(data);
    const response = await axiosClient.post("/employees/addEmployee", data);
    return response?.data;
  } catch (error) {
    console.error("Error adding employee:", error);
  }
};

/* update an employee */
export const updateEmployee = async (id, data) => {
  try {
    const response = await axiosClient.put(
      `/employees/editEmployee/${id}`,
      data
    );
    return response?.data;
  } catch (error) {
    console.error("Error updating employee:", error);
  }
};

/* Soft Delete an Employee */
export const softDeleteEmployee = async (id) => {
  try {
    const response = await axiosClient.put(
      `/employees/softDeleteEmployee/${id}`
    );
    return response?.data;
  } catch (error) {
    console.error("Error deleting employee:", error);
  }
};

/* Hard Delete an Employee */
export const hardDeleteEmployee = async (id) => {
  try {
    const response = await axiosClient.delete(
      `/employees/deleteEmployee/${id}`
    );
    return response?.data;
  } catch (error) {
    console.error("Error deleting employee:", error);
  }
};
