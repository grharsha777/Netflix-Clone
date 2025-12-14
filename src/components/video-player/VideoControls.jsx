import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProgressBar from './ProgressBar';
import ControlsRow from './ControlsRow';

const VideoControls = ({
  showControls,
  error,
  title,
  currentTime,
  duration,
  buffered,
  isPlaying,
  isMuted,
  volume,
  handleSeek,
  togglePlay,
  skip,
  toggleMute,
  handleVolumeChange,
  toggleFullscreen
}) => {
  return (
    <AnimatePresence>
      {showControls && !error && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8"
        >
          <h2 className="text-2xl font-bold mb-6">{title}</h2>

          <ProgressBar
            currentTime={currentTime}
            duration={duration}
            buffered={buffered}
            handleSeek={handleSeek}
          />

          <ControlsRow
            isPlaying={isPlaying}
            isMuted={isMuted}
            volume={volume}
            currentTime={currentTime}
            duration={duration}
            togglePlay={togglePlay}
            skip={skip}
            toggleMute={toggleMute}
            handleVolumeChange={handleVolumeChange}
            toggleFullscreen={toggleFullscreen}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoControls;
