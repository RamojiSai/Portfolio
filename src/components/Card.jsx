/**
 * Reusable Card Component
 * Flexible container for content with optional border, shadow, and hover effects
 */

export const Card = ({ 
  children, 
  className = '', 
  hover = true,
  bordered = false,
  ...props 
}) => {
  const baseStyles = 'rounded-xl p-6 transition-all duration-300';
  
  const hoverStyles = hover ? 'hover:shadow-lg hover:scale-105' : '';
  const borderStyles = bordered ? 'border border-dark-200 dark:border-dark-700' : '';
  const bgStyles = 'bg-white dark:bg-dark-800 shadow-md';

  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${borderStyles} ${bgStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
