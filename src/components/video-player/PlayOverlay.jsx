import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

const PlayOverlay = ({ isPlaying, isLoading, error, togglePlay }) => {
  return (
    <AnimatePresence>
      {!isPlaying && !isLoading && !error && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className="p-8 bg-black/50 backdrop-blur-sm rounded-full pointer-events-auto"
          >
            <Play size={64} fill="white" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PlayOverlay;
