import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Maximize } from 'lucide-react';

const SettingsControls = ({ toggleFullscreen }) => {
  return (
    <div className="flex items-center gap-4">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <Settings size={24} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleFullscreen}
        className="p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <Maximize size={24} />
      </motion.button>
    </div>
  );
};

export default SettingsControls;
