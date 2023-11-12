import React from 'react';
import VideoPlayer from './VideoPlayer';

const VideoFile = () => {
  const videoUrl = '/Portfolio2023.mp4';
  // const thumbnailUrl = '/img/thumbnail.jpg'; // Replace with the actual thumbnail URL

  return (
    <div>
      <VideoPlayer videoUrl={videoUrl} />
      {/* thumbnailUrl={thumbnailUrl} */}
    </div>
  );
};

export default VideoFile;