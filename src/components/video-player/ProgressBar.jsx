import React from 'react';

const ProgressBar = ({ currentTime, duration, buffered, handleSeek }) => {
  return (
    <div className="mb-6">
      <div
        onClick={handleSeek}
        className="relative h-1 bg-white/30 rounded-full cursor-pointer group"
      >
        {/* Buffered */}
        <div
          className="absolute h-full bg-white/50 rounded-full"
          style={{ width: `${buffered}%` }}
        />
        {/* Progress */}
        <div
          className="absolute h-full bg-netflix-red rounded-full"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        />
        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-netflix-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ left: `${(currentTime / duration) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
