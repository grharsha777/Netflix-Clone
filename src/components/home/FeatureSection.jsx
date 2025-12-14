import React from 'react';
import { motion } from 'framer-motion';

const FeatureSection = ({ title, description, image, imageFirst = false }) => {
  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center mb-20 ${imageFirst ? 'md:grid-flow-dense' : ''}`}>
      <motion.div
        initial={{ x: imageFirst ? 50 : -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={imageFirst ? 'md:col-start-2' : ''}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
        <p className="text-xl text-netflix-lightGray">{description}</p>
      </motion.div>
      <motion.img
        initial={{ x: imageFirst ? -50 : 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        src={image}
        alt={title}
        className={`rounded-lg shadow-2xl ${imageFirst ? 'md:col-start-1 md:row-start-1' : ''}`}
      />
    </div>
  );
};

export default FeatureSection;
