import React from 'react';

const ErrorMessage = ({ error, onClose }) => {
  if (!error) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="bg-black/80 backdrop-blur-sm p-8 rounded-lg text-center">
        <p className="text-xl mb-4">{error}</p>
        <button
          onClick={onClose}
          className="px-6 py-3 bg-netflix-red rounded hover:bg-netflix-red/90 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;
