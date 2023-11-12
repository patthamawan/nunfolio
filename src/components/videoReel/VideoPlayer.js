import React from 'react';
import ReactPlayer from 'react-player';


const VideoPlayer = ({ videoUrl, humbnailUrl }) => {
  return (
    <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
      <ReactPlayer
        url={videoUrl}
        controls={true}
        width="100%"
        height="100%"
        // light={thumbnailUrl} // Specify the thumbnail URL here
        playIcon={<button>Play</button>} // Customize the play button
      />
    </div>
  );
};

export default VideoPlayer;