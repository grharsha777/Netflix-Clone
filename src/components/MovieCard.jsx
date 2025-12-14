import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import VideoPlayer from './video-player/VideoPlayer';

const MovieCard = ({ movie, index }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  const handlePlayClick = (e) => {
    e.stopPropagation();
    setShowPlayer(true);
  };

  const handleCardClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
      >
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <img
            src={movie.thumbnail}
            alt={movie.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-0 left-0 right-0 p-4 space-y-2"
              >
                <h3 className="text-lg font-bold">{movie.title}</h3>
                
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handlePlayClick}
                    className="p-2 bg-white rounded-full text-black hover:bg-white/90 transition-colors"
                  >
                    <Play size={16} fill="black" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Plus size={16} />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <ThumbsUp size={16} />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors ml-auto"
                  >
                    <ChevronDown size={16} />
                  </motion.button>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-green-500 font-semibold">{movie.match}% Match</span>
                  <span className="border border-white/40 px-1 text-xs">{movie.rating}</span>
                  <span>{movie.duration}</span>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {movie.genres?.slice(0, 3).map((genre, idx) => (
                    <span key={idx} className="text-xs text-white/70">
                      {genre}{idx < 2 && ' •'}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

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

export default MovieCard;
