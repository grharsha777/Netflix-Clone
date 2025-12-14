import React from 'react';
import PlaybackControls from './PlaybackControls';
import VolumeControl from './VolumeControl';
import SettingsControls from './SettingsControls';
import { formatTime } from './utils/timeUtils';

const ControlsRow = ({
  isPlaying,
  isMuted,
  volume,
  currentTime,
  duration,
  togglePlay,
  skip,
  toggleMute,
  handleVolumeChange,
  toggleFullscreen
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <PlaybackControls
          isPlaying={isPlaying}
          togglePlay={togglePlay}
          skip={skip}
        />

        <VolumeControl
          isMuted={isMuted}
          volume={volume}
          toggleMute={toggleMute}
          handleVolumeChange={handleVolumeChange}
        />

        <span className="text-sm">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>

      <SettingsControls toggleFullscreen={toggleFullscreen} />
    </div>
  );
};

export default ControlsRow;
