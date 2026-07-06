
import { useState } from "react";
import { Container, Typography, Button, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import VideoPlayer from "./videoPlayer.js"; 
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a62e26',
    },
  },
});

const AlertStrings = [
  "brooooo stop it!!!",
  "stop it brooo",
  "if you keep going..",
  "i swear to god....",
  "releases 2.0.0..",
];

function App() {
  const [count, setCount] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  function handleClick() {
    alert(AlertStrings[count] || "brooooo stop it!!!");
    
    setCount((prev) => prev + 1);
    
    if (count === 4) {
      setShowVideo(true);
      setCount(0); 
    }
  }

  return (
    <ThemeProvider theme={darkTheme}>
      {/* CssBaseline kicks in normal theme resets across browsers */}
      <CssBaseline /> 
      
      <Container 
        maxWidth="sm" 
        sx={{ 
          height: '100vh', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
          textAlign: 'center',
          gap: 3
        }}
      >
        <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold' }}>
          Welcome to the netflix realm.... click 5 times for a surprise..??
        </Typography>

        <Button 
          variant="contained" 
          color="primary" 
          size="large"
          onClick={handleClick}
          sx={{ padding: '12px 36px', fontSize: '1.2rem' }}
        >
          meow..??
        </Button>

        {/* Global Fullscreen Overlay */}
        {showVideo && <VideoPlayer />}
      </Container>
    </ThemeProvider>
  );
}

export default App;
