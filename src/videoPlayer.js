import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import sampleVideo from './assets/yea.mp4'; 

function VideoPlayer() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 1.0; 
      videoRef.current.play().catch(error => {
        console.error("Playback failed:", error);
      });
    }
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        zIndex: 99999, // Ensures it covers everything, including MUI appbars
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        component="video"
        ref={videoRef}
        autoPlay 
        playsInline
        loop
        src={sampleVideo}
        sx={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover' 
        }}
      />
    </Box>
  );
}

export default VideoPlayer;
