import React from "react";

const AddProject = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6">Project Information</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="projectName" className="block text-gray-700">
              Project name
            </label>
            <input
              type="text"
              id="projectName"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Kirby Williams"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="imageUrl" className="block text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Rebecca Palmer"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="asaName" className="block text-gray-700">
              Token Name
            </label>
            <input
              type="text"
              id="asaName"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Kibo Carlson"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="asaSymbol" className="block text-gray-700">
              Token Symbol
            </label>
            <input
              type="text"
              id="asaSymbol"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Harlan Hood"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="asaRepresentation" className="block text-gray-700">
              What does 1 Token represent in the real world?
            </label>
            <input
              type="text"
              id="asaRepresentation"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Damon Buckner"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="px-4 py-2 text-red-500 rounded-lg mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-blue-500 rounded-lg"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
