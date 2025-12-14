import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import MovieCard from '../components/MovieCard';
import { getMyList } from '../services/movieService';

const MyListPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMyList = async () => {
      const myListMovies = await getMyList();
      setMovies(myListMovies);
      setLoading(false);
    };

    loadMyList();
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
      
      <div className="pt-24 px-8 md:px-16 max-w-7xl mx-auto pb-20">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          My List
        </motion.h1>

        {movies.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          >
            {movies.map((movie, index) => (
              <MovieCard key={movie.id} movie={movie} delay={index * 0.05} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-netflix-lightGray mb-4">Your list is empty</p>
            <p className="text-lg text-netflix-lightGray">Add movies and shows to your list to watch them later</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MyListPage;
