import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';

/**
 * Navbar component for site navigation
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} - Navbar component
 */
const Navbar = ({ className = '' }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <nav className={`bg-white dark:bg-gray-800 shadow-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              PLP Task Manager
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/tasks" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Tasks
            </Link>
            <Link 
              to="/api-data" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              API Data
            </Link>
          </div>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <Button
              variant="secondary"
              size="sm"
              onClick={toggleTheme}
              className="flex items-center space-x-2"
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              {isDark ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span className="hidden sm:inline">Light</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  <span className="hidden sm:inline">Dark</span>
                </>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="secondary"
                size="sm"
                className="p-2"
                aria-label="Open mobile menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4">
          <div className="flex flex-col space-y-2">
            <Link 
              to="/" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium py-2"
            >
              Home
            </Link>
            <Link 
              to="/tasks" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium py-2"
            >
              Tasks
            </Link>
            <Link 
              to="/api-data" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium py-2"
            >
              API Data
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
