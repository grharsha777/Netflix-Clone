import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const EmailForm = ({ email, onEmailChange, onGetStarted }) => {
  return (
    <motion.div
      key="email-form"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto"
    >
      <input
        type="email"
        placeholder="Email address"
        className="w-full md:flex-1 px-6 py-4 text-lg bg-white/10 backdrop-blur-md border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-netflix-red text-white placeholder-gray-400"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onGetStarted}
        className="w-full md:w-auto px-8 py-4 bg-netflix-red text-white text-lg font-semibold rounded-md flex items-center justify-center gap-2 hover:bg-red-700 transition-colors"
      >
        Get Started <ChevronRight size={24} />
      </motion.button>
    </motion.div>
  );
};

export default EmailForm;
