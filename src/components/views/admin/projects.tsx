import React from 'react';
import { Button } from "@/components/ui/button"

const Projects = () => {
  return (
    <div>
      <div className="flex items-center">
        <h1 className="font-semibold text-lg md:text-2xl">Onboarding</h1>
        <Button className="ml-auto" size="sm">
          Onboard New Developer
        </Button>
      </div>
      <div className="border shadow-sm rounded-lg p-6">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">No Projects Found</h2>
          <p className="text-gray-500 mb-6">Please add a new project to onboard new users.</p>
          <Button>Add New Project</Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;