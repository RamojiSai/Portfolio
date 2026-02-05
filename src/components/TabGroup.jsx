/**
 * Reusable TabGroup Component for tabbed interfaces
 */

import { useState } from 'react';

export const TabGroup = ({ 
  tabs = [], 
  defaultTab = 0,
  className = '',
  ...props 
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className={`${className}`} {...props}>
      {/* Tab Headers */}
      <div className="flex gap-2 border-b border-dark-200 dark:border-dark-600 mb-6 overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`pb-3 px-4 font-semibold whitespace-nowrap transition-all duration-300 ${
              activeTab === index
                ? 'text-accent-blue border-b-2 border-accent-blue'
                : 'text-dark-600 dark:text-dark-400 hover:text-dark-800 dark:hover:text-dark-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="animate-fade-in">
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
};

export default TabGroup;
