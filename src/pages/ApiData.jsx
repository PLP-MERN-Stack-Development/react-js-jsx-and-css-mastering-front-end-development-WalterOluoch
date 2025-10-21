import React from 'react';
import ApiData from '../components/ApiData';

/**
 * API Data page component
 */
const ApiDataPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          API Data Explorer
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Explore data from JSONPlaceholder API with search functionality and pagination.
        </p>
      </div>
      
      <ApiData />
    </div>
  );
};

export default ApiDataPage;
