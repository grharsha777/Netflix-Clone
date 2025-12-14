import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import VideoPlayer from './video-player/VideoPlayer';

const HeroSection = ({ movie }) => {
  const navigate = useNavigate();
  const [showPlayer, setShowPlayer] = useState(false);

  if (!movie) return null;

  const handlePlayClick = () => {
    setShowPlayer(true);
  };

  const handleInfoClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <>
      <div className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={movie.thumbnail}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 md:px-8 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold">{movie.title}</h1>
              
              <div className="flex items-center gap-4 text-lg">
                <span className="text-green-500 font-semibold">{movie.match}% Match</span>
                <span>{movie.year}</span>
                <span className="border border-white/40 px-2 py-0.5 text-sm">{movie.rating}</span>
                <span>{movie.duration}</span>
              </div>

              <p className="text-lg md:text-xl max-w-xl text-white/90">
                {movie.description}
              </p>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePlayClick}
                  className="flex items-center gap-2 px-8 py-3 bg-white text-black rounded font-bold text-lg hover:bg-white/90 transition-colors"
                >
                  <Play size={24} fill="black" />
                  Play
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleInfoClick}
                  className="flex items-center gap-2 px-8 py-3 bg-white/20 backdrop-blur-sm rounded font-bold text-lg hover:bg-white/30 transition-colors"
                >
                  <Info size={24} />
                  More Info
                </motion.button>
              </div>

              <div className="flex flex-wrap gap-2">
                {movie.genres?.map((genre, index) => (
                  <span
                    key={index}
                    className="text-sm text-white/70"
                  >
                    {genre}{index < movie.genres.length - 1 && ' •'}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showPlayer && (
          <VideoPlayer
            videoUrl={movie.videoUrl}
            title={movie.title}
            onClose={() => setShowPlayer(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroSection;
