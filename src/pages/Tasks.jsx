import React from 'react';
import TaskManager from '../components/TaskManager';

/**
 * Tasks page component
 */
const Tasks = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Task Management
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Organize your tasks, track progress, and stay productive with our intuitive task manager.
        </p>
      </div>
      
      <TaskManager />
    </div>
  );
};

export default Tasks;


