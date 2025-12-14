import { useState, useRef } from 'react';

export const useControlsVisibility = (isPlaying) => {
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef(null);

  const handleMouseMove = () => {
    setShowControls(true);
    
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  return { showControls, handleMouseMove };
};
