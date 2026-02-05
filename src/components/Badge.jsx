/**
 * Reusable Badge Component
 * For displaying tags, labels, and skill levels
 */

export const Badge = ({ 
  children, 
  variant = 'default',
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center rounded-full font-semibold whitespace-nowrap';
  
  const variantStyles = {
    default: 'bg-grey-100 text-blue-900 dark:bg-blue-800 dark:text-blue-100',
    primary: 'bg-accent-blue text-white',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
    error: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
    expert: 'bg-gradient-to-r from-accent-purple to-accent-cyan text-white',
    advanced: 'bg-accent-blue text-white',
    intermediate: 'bg-dark-300 text-dark-900 dark:bg-dark-600 dark:text-dark-100',
  };

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  };

  return (
    <span
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
