import React from "react";

const Employee = ({ data, onEdit, onDelete }) => {
  return (
    <main className="w-full py-1 hover:bg-gray-100 bg-white flex flex-row items-center m-t-2 shadow-md hover:shadow-lg gap-1">
      <p className="w-1/6 text-center">{data.id}</p>
      <p className="w-1/4 text-center">{data.name}</p>
      <p className="w-1/4 text-center">{data.email}</p>
      <p className="w-1/6 text-center">{data.age}</p>
      <button
        onClick={() => {
          onEdit(data._id);
        }}
        className="bg-blue-400 text-white hover:bg-blue-500 rounded-lg px-4 py-2 w-1/6"
        type="button"
      >
        {" "}
        Edit
      </button>
      <button
        onClick={() => {
          onDelete(data._id);
        }}
        className="bg-red-400 text-white hover:bg-red-500 rounded-lg px-4 py-2 w-1/6"
      >
        Delete
      </button>
    </main>
  );
};

export default Employee;
