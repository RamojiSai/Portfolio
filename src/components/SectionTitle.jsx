/**
 * Reusable SectionTitle Component
 * For consistent section headings
 */

export const SectionTitle = ({ 
  title, 
  subtitle,
  className = '',
  ...props 
}) => {
  return (
    <div className={`mb-16 ${className}`} {...props}>
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
