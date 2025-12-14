import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

const PlaybackControls = ({ isPlaying, togglePlay, skip }) => {
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        {isPlaying ? <Pause size={32} /> : <Play size={32} fill="white" />}
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => skip(-10)}
        className="p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <SkipBack size={24} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => skip(10)}
        className="p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <SkipForward size={24} />
      </motion.button>
    </>
  );
};

export default PlaybackControls;
