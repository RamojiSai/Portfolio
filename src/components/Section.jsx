/**
 * Reusable Section Container Component
 * Provides consistent spacing and layout for main sections
 */

export const Section = ({ 
  children, 
  className = '',
  id = '',
  dark = false,
  fullWidth = false,
  ...props 
}) => {
  const bgStyles = dark 
    ? 'bg-dark-900 text-white' 
    : 'bg-transparent dark:bg-transparent dark:text-white';
  
  const containerWidth = fullWidth ? 'w-full' : 'max-w-7xl mx-auto';

  return (
    <section
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${bgStyles} ${className}`}
      {...props}
    >
      <div className={`${containerWidth}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
