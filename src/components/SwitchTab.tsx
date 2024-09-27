import React from 'react';

interface SwitchTabProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
}

const SwitchTab: React.FC<SwitchTabProps> = ({ activeTab, setActiveTab, options }) => {
  return (
    <div className="w-[300px] max-w-sm rounded flex flex-col">
      <div className="mx-8 shadow-lg rounded-full h-10 mt-4 flex p-1 relative items-center">
        <div className="w-full flex justify-center">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => setActiveTab(option)}
              className={`flex-1 text-center py-2 rounded-full transition ${
                activeTab === option ? 'bg-gray-200' : 'bg-transparent'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <span
          className={`elSwitch bg-black shadow text-white flex items-center justify-center w-1/2 rounded-full h-8 transition-all absolute top-[4px] ${
            options.indexOf(activeTab) === 0 ? 'left-1' : 'left-[calc(100%-50%)]'
          }`}
        >
          {activeTab}
        </span>
      </div>
    </div>
  );
};

export default SwitchTab;
