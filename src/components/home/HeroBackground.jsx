import React from 'react';
import { motion } from 'framer-motion';

const HeroBackground = () => {
  return (
    <motion.div
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0"
    >
      <img
        src="https://images.unsplash.com/photo-1574267432644-f610c4bb5c2f?w=1920&h=1080&fit=crop"
        alt="Hero Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-netflix-black/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-netflix-black/80 via-transparent to-netflix-black/80" />
    </motion.div>
  );
};

export default HeroBackground;
