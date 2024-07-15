import React from 'react';
import YouTube from 'react-youtube';

const ExerciseRoutine = () => {
  const videoId = 'QvYYiWV3Fjs';

  const onReady = (event) => {
    event.target.mute();
  };

  const onEnd = (event) => {
    event.target.playVideo();
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="flex flex-col items-center mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Exercise Routine to Prevent Diabetes</h2>
      <YouTube videoId={videoId} opts={opts} onReady={onReady} onEnd={onEnd} />
    </div>
  );
};

export default ExerciseRoutine;
