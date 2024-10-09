import React from "react";

const DeleteEmployee = ({ id, handleDelete, handleClose }) => {
  return (
    <main className="fixed top-0 left-0 h-[100vh] w-[100vw] z-20 backdrop-brightness-50">
      <div className="fixed top-0 left-0 h-[100vh] w-[100vw] flex justify-center items-center p-4">
        <div className="relative h-[200px] w-[500px] bg-white text-black  rounded-lg flex flex-col">
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 border rounded-lg border-black p-2"
          >
            x
          </button>
          <h1 className="text-3xl font-bold">Delete Employee</h1>
          <p className="text-lg">
            Are you sure you want to delete this employee?
          </p>
          <div className="flex justify-around items-center mt-5">
            <button
              onClick={async () => {
                await handleDelete(id);
                handleClose();
              }}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
            <button
              onClick={handleClose}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DeleteEmployee;
