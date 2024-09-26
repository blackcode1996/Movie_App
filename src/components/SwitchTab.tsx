import React, { useState } from 'react';

const SwitchTab = () => {
  const [activeTab, setActiveTab] = useState('Day');

  const handleTabChange = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-[300px] max-w-sm rounded flex flex-col">
      <div className="mx-8 shadow-lg rounded-full h-10 mt-4 flex p-1 relative items-center">
        <div className="w-full flex justify-center">
          <button
            onClick={() => handleTabChange('Day')}
            className={`flex-1 text-center py-2 rounded-full transition ${
              activeTab === 'Day' ? 'bg-gray-200' : 'bg-transparent'
            }`}
          >
            Day
          </button>
        </div>
        <div className="w-full flex justify-center">
          <button
            onClick={() => handleTabChange('Week')}
            className={`flex-1 text-center py-2 rounded-full transition ${
              activeTab === 'Week' ? 'bg-gray-200' : 'bg-transparent'
            }`}
          >
            Week
          </button>
        </div>
        <span
          className={`elSwitch bg-black shadow text-white flex items-center justify-center w-1/2 rounded-full h-8 transition-all absolute top-[4px] ${
            activeTab === 'Day' ? 'left-1' : 'left-[calc(100%-50%)]'
          }`}
        >
          {activeTab}
        </span>
      </div>
    </div>
  );
};

export default SwitchTab;
