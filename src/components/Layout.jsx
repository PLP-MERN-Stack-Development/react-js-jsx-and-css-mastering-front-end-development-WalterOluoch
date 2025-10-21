import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Layout component that includes Navbar and Footer
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.showFooter - Whether to show footer
 * @returns {JSX.Element} - Layout component
 */
const Layout = ({ children, className = '', showFooter = true }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <Navbar />
      
      <main className={`flex-1 ${className}`}>
        {children}
      </main>
      
      {showFooter && <Footer />}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  showFooter: PropTypes.bool,
};

export default Layout;
