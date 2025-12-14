import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Plus, ThumbsUp, ThumbsDown, Share2, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import MovieRow from '../components/MovieRow';
import Footer from '../components/Footer';
import VideoPlayer from '../components/video-player/VideoPlayer';
import { getMovieById, getSimilarMovies } from '../services/movieService';

const MovieDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await getMovieById(parseInt(id));
      setMovie(movieData);
      
      if (movieData) {
        const similar = await getSimilarMovies(movieData.genres[0]);
        setSimilarMovies(similar.filter(m => m.id !== movieData.id));
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return (
      <div className="min-h-screen bg-netflix-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-netflix-red"></div>
      </div>
    );
  }

  const handlePlayClick = () => {
    setShowPlayer(true);
  };

  return (
    <div className="min-h-screen bg-netflix-black text-white">
      <Header />

      <div className="relative h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={movie.thumbnail}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="absolute top-24 left-8 z-10 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
        >
          <ArrowLeft size={20} />
          Back
        </motion.button>

        <div className="relative h-full flex items-end pb-20">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl space-y-6"
            >
              <h1 className="text-6xl md:text-8xl font-bold">{movie.title}</h1>

              <div className="flex flex-wrap items-center gap-4 text-lg">
                <span className="text-green-500 font-semibold text-2xl">{movie.match}% Match</span>
                <span className="text-xl">{movie.year}</span>
                <span className="border border-white/40 px-3 py-1">{movie.rating}</span>
                <span className="text-xl">{movie.duration}</span>
              </div>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePlayClick}
                  className="flex items-center gap-3 px-10 py-4 bg-white text-black rounded font-bold text-xl hover:bg-white/90 transition-colors"
                >
                  <Play size={28} fill="black" />
                  Play
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  <Plus size={28} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  <ThumbsUp size={28} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  <ThumbsDown size={28} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors ml-auto"
                >
                  <Share2 size={28} />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12 space-y-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <p className="text-xl leading-relaxed">{movie.description}</p>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-white/60">Cast: </span>
              <span>{movie.cast?.join(', ')}</span>
            </div>
            <div>
              <span className="text-white/60">Genres: </span>
              <span>{movie.genres?.join(', ')}</span>
            </div>
            <div>
              <span className="text-white/60">Director: </span>
              <span>{movie.director}</span>
            </div>
          </div>
        </div>

        {similarMovies.length > 0 && (
          <MovieRow title="More Like This" movies={similarMovies} />
        )}
      </div>

      <Footer />

      <AnimatePresence>
        {showPlayer && (
          <VideoPlayer
            videoUrl={movie.videoUrl}
            title={movie.title}
            onClose={() => setShowPlayer(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MovieDetailPage;
