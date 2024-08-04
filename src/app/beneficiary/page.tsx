"use client";

import React, { useState } from "react";

const Beneficiary = () => {
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedVendor, setSelectedVendor] = useState("");
  const [amount, setAmount] = useState<number>();

  const handleProjectChange = (e: any) => {
    setSelectedProject(e.target.value);
  };

  const handleVendorChange = (e: any) => {
    setSelectedVendor(e.target.value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">
            Utilize Token
          </h2>
          <p className="text-gray-500">
            Please select the project from which you want to utilize the token.
          </p>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="project" className="block text-gray-700 mb-2">
              Project
            </label>
            <select
              id="project"
              value={selectedProject}
              onChange={handleProjectChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">Select a project</option>
              <option value="flood">Flood project</option>
            </select>
          </div>

          {selectedProject && (
            <div className="mb-4">
              <label htmlFor="vendor" className="block text-gray-700 mb-2">
                Vendor
              </label>
              <select
                id="vendor"
                value={selectedVendor}
                onChange={handleVendorChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="">Select a vendor</option>
                <option value="vendor1">Vendor 1</option>
                <option value="vendor2">Vendor 2</option>
              </select>
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Your Balance: <span className="font-semibold">0</span>
            </label>
          </div>
          <div className="mb-6">
            <label htmlFor="utilizeToken" className="block text-gray-700 mb-2">
              Utilize Token
            </label>
            <input
              type="number"
              id="utilizeToken"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="0"
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>

          {amount ? (
            <div className="border border-[#003d79] p-2 py-4 rounded text-center">
              <span className="text-[#003d79] text-xs">
                You will receive {amount} sacks of rice for {amount} tokens
              </span>
            </div>
          ) : (
            ""
          )}
          <div className="flex justify-end mt-4">
            <button
              type="button"
              className="px-4 py-2 text-red-400 rounded-lg mr-2 text-sm"
            >
              Cancel
            </button>
            <div className=" bg-[#5b9bd4] rounded-lg">
              <button type="submit" className="px-4 py-2 text-white text-sm">
                Utilize
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Beneficiary;
