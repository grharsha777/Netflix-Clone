import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import Header from '../components/Header';
import MovieCard from '../components/MovieCard';
import { searchMovies } from '../services/movieService';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (query.trim()) {
        handleSearch();
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [query]);

  const handleSearch = async () => {
    setLoading(true);
    const searchResults = await searchMovies(query);
    setResults(searchResults);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-netflix-black">
      <Header />
      
      <div className="pt-24 px-8 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-12"
        >
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-netflix-lightGray" size={24} />
            <input
              type="text"
              placeholder="Search for movies, TV shows..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-14 pr-4 py-4 bg-netflix-darkGray text-white text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
              autoFocus
            />
          </div>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-netflix-red"></div>
          </div>
        ) : results.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pb-20"
          >
            {results.map((movie, index) => (
              <MovieCard key={movie.id} movie={movie} delay={index * 0.05} />
            ))}
          </motion.div>
        ) : query.trim() ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-netflix-lightGray">No results found for "{query}"</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-netflix-lightGray">Start typing to search...</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
