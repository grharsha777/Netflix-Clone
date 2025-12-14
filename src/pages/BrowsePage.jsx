import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MovieRow from '../components/MovieRow';
import { getMoviesByCategory } from '../services/movieService';

const BrowsePage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      const movieCategories = await getMoviesByCategory();
      setCategories(movieCategories);
      setLoading(false);
    };

    loadMovies();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-netflix-black">
        <Header />
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-netflix-red"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-netflix-black">
      <Header />
      <HeroSection />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 -mt-32 pb-20"
      >
        {categories.map((category, index) => (
          <MovieRow
            key={category.id}
            title={category.name}
            movies={category.movies}
            delay={index * 0.1}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default BrowsePage;
