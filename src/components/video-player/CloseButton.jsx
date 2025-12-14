import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const CloseButton = ({ showControls, onClose }) => {
  return (
    <AnimatePresence>
      {showControls && (
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-3 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
        >
          <X size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default CloseButton;
