import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card component for displaying content in a boxed layout
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.hover - Whether to show hover effects
 * @param {boolean} props.shadow - Whether to show shadow
 * @param {string} props.padding - Padding size (sm, md, lg)
 * @returns {JSX.Element} - Card component
 */
const Card = ({ 
  children, 
  className = '', 
  hover = false, 
  shadow = true,
  padding = 'md',
  ...rest 
}) => {
  // Base classes
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300';
  
  // Padding classes
  const paddingClasses = {
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
  };
  
  // Shadow classes
  const shadowClasses = shadow ? 'shadow-md hover:shadow-lg' : '';
  
  // Hover classes
  const hoverClasses = hover ? 'hover:shadow-lg hover:scale-105' : '';
  
  // Combine all classes
  const cardClasses = `${baseClasses} ${paddingClasses[padding]} ${shadowClasses} ${hoverClasses} ${className}`;
  
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool,
  shadow: PropTypes.bool,
  padding: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Card;
