"use client";
import React from "react";
import { useProject } from "@/services/projects";
import { UUID } from "crypto";
import { useParams } from "next/navigation";
import { DollarSign, Calendar, RefreshCw, MapPin } from "lucide-react";

const Page = () => {
  const { uuid } = useParams();
  const project = useProject(uuid as UUID);
  console.log("project", project);

  if (!project.data) {
    return <div>Loading...</div>;
  }

  const {
    name,
    budget,
    contractAddress,
    createdAt,
    description,
    imageUrl,
    rwaRepresentation,
    tokenName,
    tokenQuantity,
    tokenSymbol,
    updatedAt,
    userWallet,
  } = project.data?.data;

  return (
    <div className='p-4 bg-gray-100 min-h-screen'>
      <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6'>
        <h1 className='text-3xl font-bold mb-4'>{name}</h1>
        <p className='text-gray-700 mb-4'>{description}</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div className='flex items-center'>
            <DollarSign className='text-blue-500 mr-2' />
            <span className='text-gray-700'>Budget: {budget}</span>
          </div>
          <div className='flex items-center'>
            <span className='text-gray-700'>
              Contract Address: {contractAddress}
            </span>
          </div>
          <div className='flex items-center'>
            <Calendar className='text-blue-500 mr-2' />
            <span className='text-gray-700'>
              Created At: {new Date(createdAt).toLocaleDateString()}
            </span>
          </div>
          {updatedAt && (
            <div className='flex items-center'>
              <RefreshCw className='text-blue-500 mr-2' />
              <span className='text-gray-700'>
                Updated At: {new Date(updatedAt).toLocaleDateString()}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
