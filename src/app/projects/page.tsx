"use client";

import { useListProject } from "@/services/projects";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Projects() {
  const projects = useListProject();
  const router = useRouter();

  return (
    <div className='p-4 bg-gray-100 min-h-screen'>
      <h1 className='text-3xl font-bold mb-8 text-center'>Projects</h1>
      <div className='flex justify-end mt-4'>
        <Link
          href='/projects/add'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Create Project
        </Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.data?.data.map((project: any) => (
          <div
            key={project.id}
            className='bg-white rounded-lg shadow-md p-4 cursor-pointer'
            onClick={() => router.push(`/projects/${project?.uuid}`)}>
            <div className='relative'>
              <img
                src={project.imageUrl}
                alt={project.name}
                className='w-full h-48 object-cover rounded-t-lg'
              />
              <div className='absolute top-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded'>
                <strong>{project.budget}</strong> {project.rwaRepresentation} (
                {project.tokenSymbol})
              </div>
            </div>
            <div className='p-4'>
              <h2 className='text-xl font-semibold mb-2'>{project.name}</h2>
              <p className='text-gray-700 mb-2'>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
