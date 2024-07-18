import { BorderAllRounded, RoundedCorner } from '@mui/icons-material';
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
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="flex flex-col w-11/12 h-[550px] py-6 items-center mt-10  bg-primary bg-opacity-50 shadow-md rounded-lg">
      <h2 className='font-bold text-2xl text-center mb-10'>Exercise Routine to Prevent Diabetes</h2>
      <YouTube videoId={videoId} className='overflow-hidden' opts={opts} onReady={onReady} onEnd={onEnd} />
    </div>
  );
};

export default ExerciseRoutine;
