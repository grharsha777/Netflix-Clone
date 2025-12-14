import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import VideoElement from './VideoElement';
import VideoControls from './VideoControls';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import PlayOverlay from './PlayOverlay';
import CloseButton from './CloseButton';
import { useVideoPlayer } from './hooks/useVideoPlayer';
import { useFullscreen } from './hooks/useFullscreen';
import { useControlsVisibility } from './hooks/useControlsVisibility';

const VideoPlayer = ({ videoUrl, onClose, title }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  
  const {
    isPlaying,
    isMuted,
    volume,
    currentTime,
    duration,
    buffered,
    isLoading,
    error,
    togglePlay,
    toggleMute,
    handleVolumeChange,
    handleSeek,
    skip,
    setIsPlaying,
    setIsLoading,
    setError
  } = useVideoPlayer(videoRef);

  const { isFullscreen, toggleFullscreen } = useFullscreen(containerRef);
  const { showControls, handleMouseMove } = useControlsVisibility(isPlaying);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black"
      onMouseMove={handleMouseMove}
    >
      <CloseButton showControls={showControls} onClose={onClose} />

      <VideoElement
        videoRef={videoRef}
        videoUrl={videoUrl}
        togglePlay={togglePlay}
        setIsPlaying={setIsPlaying}
        setIsLoading={setIsLoading}
        setError={setError}
      />

      <LoadingSpinner isLoading={isLoading} />
      <ErrorMessage error={error} onClose={onClose} />
      <PlayOverlay isPlaying={isPlaying} isLoading={isLoading} error={error} togglePlay={togglePlay} />

      <VideoControls
        showControls={showControls}
        error={error}
        title={title}
        currentTime={currentTime}
        duration={duration}
        buffered={buffered}
        isPlaying={isPlaying}
        isMuted={isMuted}
        volume={volume}
        handleSeek={handleSeek}
        togglePlay={togglePlay}
        skip={skip}
        toggleMute={toggleMute}
        handleVolumeChange={handleVolumeChange}
        toggleFullscreen={toggleFullscreen}
      />
    </motion.div>
  );
};

export default VideoPlayer;
