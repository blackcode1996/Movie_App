import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <div className="animate-pulse bg-gray-300 rounded-lg p-4 h-full">
      <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
      <div className="h-6 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  );
};

export default SkeletonCard;
