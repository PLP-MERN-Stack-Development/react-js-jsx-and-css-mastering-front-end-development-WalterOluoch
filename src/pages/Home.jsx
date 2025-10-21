import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

/**
 * Home page component
 */
const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
          Welcome to PLP Task Manager
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto animate-slide-up">
          A modern, responsive task management application built with React, Tailwind CSS, and modern web technologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Link to="/tasks">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Get Started
            </Button>
          </Link>
          <Link to="/api-data">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Explore API Data
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card hover className="text-center animate-slide-up">
          <div className="text-blue-600 dark:text-blue-400 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Task Management</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Create, organize, and track your tasks with an intuitive interface. Mark tasks as complete and filter by status.
          </p>
        </Card>

        <Card hover className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="text-green-600 dark:text-green-400 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Dark Mode</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Switch between light and dark themes with a single click. Your preference is automatically saved.
          </p>
        </Card>

        <Card hover className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="text-purple-600 dark:text-purple-400 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">API Integration</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Explore data from external APIs with search functionality and pagination. Built with modern React patterns.
          </p>
        </Card>
      </div>

      {/* Technology Stack */}
      <Card className="animate-slide-up">
        <h2 className="text-2xl font-bold mb-6 text-center">Built With Modern Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-4 mb-3">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">React</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Component-based UI</p>
          </div>
          <div className="text-center">
            <div className="bg-cyan-100 dark:bg-cyan-900 rounded-lg p-4 mb-3">
              <span className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">Vite</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Fast build tool</p>
          </div>
          <div className="text-center">
            <div className="bg-teal-100 dark:bg-teal-900 rounded-lg p-4 mb-3">
              <span className="text-2xl font-bold text-teal-600 dark:text-teal-400">Tailwind</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Utility-first CSS</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 dark:bg-orange-900 rounded-lg p-4 mb-3">
              <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">Router</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Client-side routing</p>
          </div>
        </div>
      </Card>

      {/* Call to Action */}
      <div className="text-center mt-12 animate-slide-up">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Start managing your tasks or explore the API data integration.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/tasks">
            <Button variant="primary" size="lg">
              Manage Tasks
            </Button>
          </Link>
          <Link to="/api-data">
            <Button variant="secondary" size="lg">
              View API Data
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
