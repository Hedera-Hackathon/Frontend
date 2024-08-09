"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  useContractRead,
  useContractWrite,
} from "@/hooks/contracts/generated/custom-contracts/project";
import { useReadProjectGetProject } from "@/hooks/contracts/generated/project";

const AddProject = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Project Name is required"),
    tokenName: Yup.string().required("Token Name is required"),
    tokenQuantity: Yup.number()
      .required("Token Quantity is required")
      .positive("Token Quantity must be positive"),
    tokenSymbol: Yup.string().required("Token Symbol is required"),
    rwaRepresentation: Yup.string().required(
      "Real World Asset Representation is required"
    ),
    description: Yup.string(),
    imageUrl: Yup.string().url("Invalid URL"),
    contractAddress: Yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const contract = useContractWrite();

  const onSubmit = async (data: any) => {
    contract.mutate({
      functionName: "createProject",
      args: ["asdf", "adsfa", "adsfasd"],
    });

    // await addProject.mutateAsync({ ...data, contractAddress: "0x123" });
  };

  const { data, isPending } = useContractRead("getProjectCount");

  const {
    data: allProjecData,
    isPending: allProjectIsPending,
    error,
  } = useContractRead("getProject", [BigInt(0)]);

  console.log(allProjecData, allProjectIsPending, error, "is all project data");

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Project Information {isPending ? "..." : Number(data) || ""}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Project Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Project Name"
              {...register("name")}
            />
            {errors.name && (
              <div className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="tokenName"
              className="block text-gray-700 font-medium mb-2"
            >
              Token Name
            </label>
            <input
              type="text"
              id="tokenName"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Token Name"
              {...register("tokenName")}
            />
            {errors.tokenName && (
              <div className="text-red-500 text-sm mt-1">
                {errors.tokenName.message}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="tokenQuantity"
              className="block text-gray-700 font-medium mb-2"
            >
              Token Quantity
            </label>
            <input
              type="number"
              id="tokenQuantity"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Token Quantity"
              {...register("tokenQuantity")}
            />
            {errors.tokenQuantity && (
              <div className="text-red-500 text-sm mt-1">
                {errors.tokenQuantity.message}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="tokenSymbol"
              className="block text-gray-700 font-medium mb-2"
            >
              Token Symbol
            </label>
            <input
              type="text"
              id="tokenSymbol"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Token Symbol"
              {...register("tokenSymbol")}
            />
            {errors.tokenSymbol && (
              <div className="text-red-500 text-sm mt-1">
                {errors.tokenSymbol.message}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="rwaRepresentation"
              className="block text-gray-700 font-medium mb-2"
            >
              Real World Asset Representation
            </label>
            <input
              type="text"
              id="rwaRepresentation"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Real World Asset Representation"
              {...register("rwaRepresentation")}
            />
            {errors.rwaRepresentation && (
              <div className="text-red-500 text-sm mt-1">
                {errors.rwaRepresentation.message}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium mb-2"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Description"
              {...register("description")}
            />
            {errors.description && (
              <div className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </div>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="imageUrl"
              className="block text-gray-700 font-medium mb-2"
            >
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Image URL"
              {...register("imageUrl")}
            />
            {errors.imageUrl && (
              <div className="text-red-500 text-sm mt-1">
                {errors.imageUrl.message}
              </div>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
