import React from 'react';
import FeatureSection from './FeatureSection';

const FeaturesContainer = () => {
  const features = [
    {
      title: 'Enjoy on your TV',
      description: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
      image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&h=400&fit=crop',
      imageFirst: false
    },
    {
      title: 'Download your shows to watch offline',
      description: 'Save your favorites easily and always have something to watch.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
      imageFirst: true
    },
    {
      title: 'Watch everywhere',
      description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&h=400&fit=crop',
      imageFirst: false
    }
  ];

  return (
    <div className="py-20 border-t-8 border-netflix-gray">
      <div className="max-w-7xl mx-auto px-4">
        {features.map((feature, index) => (
          <FeatureSection
            key={index}
            title={feature.title}
            description={feature.description}
            image={feature.image}
            imageFirst={feature.imageFirst}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesContainer;
