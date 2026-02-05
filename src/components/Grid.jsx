/**
 * Reusable Grid Component for responsive layouts
 */

export const Grid = ({ 
  children, 
  cols = 3,
  gap = 4,
  className = '',
  ...props 
}) => {
  const colsMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const gapMap = {
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
  };

  return (
    <div
      className={`grid ${colsMap[cols]} ${gapMap[gap]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Grid;
