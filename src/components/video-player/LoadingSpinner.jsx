import React from 'react';

const LoadingSpinner = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-netflix-red"></div>
    </div>
  );
};

export default LoadingSpinner;
