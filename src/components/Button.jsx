/**
 * Reusable Button Component
 * Variants: primary, secondary, outline
 * Sizes: sm, md, lg
 */

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  as = 'button',
  ...props 
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 whitespace-nowrap';
  
  const variantStyles = {
    primary: 'bg-accent-blue text-white hover:bg-blue-600 shadow-lg hover:shadow-xl',
    secondary: 'bg-gradient-to-r from-accent-purple to-accent-cyan text-white hover:shadow-lg',
    outline: 'border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white',
    ghost: 'text-accent-blue hover:bg-blue-50 dark:hover:bg-dark-800'
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg'
  };

  const Component = as;
  
  return (
    <Component
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
