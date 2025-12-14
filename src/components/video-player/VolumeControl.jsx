import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const VolumeControl = ({ isMuted, volume, toggleMute, handleVolumeChange }) => {
  return (
    <div className="flex items-center gap-2 group">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMute}
        className="p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        {isMuted || volume === 0 ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </motion.button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={handleVolumeChange}
        className="w-0 group-hover:w-24 transition-all duration-300 accent-netflix-red"
      />
    </div>
  );
};

export default VolumeControl;
