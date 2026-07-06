// src/App.js
import { useState } from "react";
import { Container, Typography, Button, Box, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import VideoPlayer from "./videoPlayer.js";
import { enqueueSnackbar } from "notistack";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#dd2315',
    },
  },
});

const AlertStrings = [
  "brooooo stop it!!!",
  "stop it brooo",
  "if you keep going..",
  "i swear to god....",
  "i guess..."
];

const gradientStages = [
  "linear-gradient(45deg, #121212, #1a0f0f, #0f171e)",
  "linear-gradient(45deg, #121212, #1a0f0f, #0f171e)",
  "linear-gradient(45deg, #121212, #1a0f0f, #0f171e)",
  "linear-gradient(45deg, #121212, #1a0f0f, #0f171e)",
  "linear-gradient(45deg, #121212, #1a0f0f, #430707)",
];

function App() {
  const [count, setCount] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [blackout, setBlackout] = useState(false);

  const [isProcessing, setIsProcessing] = useState(false);

  function handleClick() {
    if (isProcessing) return;

    setIsProcessing(true);

    enqueueSnackbar(AlertStrings[count], { variant: "error" });

    const nextCount = count + 1;

    if (nextCount === 5) {
      alert("telefrags you");
      setBlackout(true);

      setTimeout(() => {
        setShowVideo(true);
      }, 1000); // Wait until screen is black

      setCount(0);
    } else {
      setCount(nextCount);
    }

    setIsProcessing(false);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          background: gradientStages[count] || gradientStages[0],
          backgroundSize: "400% 400%",
          animation: "gradientFlow 10s ease infinite",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "background 0.8s ease-in-out",

          "@keyframes gradientFlow": {
            "0%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" },
            "100%": { backgroundPosition: "0% 50%" },
          },
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            gap: 4
          }}
        >

          <Typography
            style={{ fontSize: '60px' }}
            variant="h5"
            component="h1"
            sx={{
              fontWeight: 'bold',
              transform: `scale(${1 + count * 0.03})`,
              transition: 'transform 0.3s ease',
              textShadow: count > 2 ? '0 0 20px rgba(255, 0, 0, 0.7)' : 'none'
            }}
          >
            Netflix
          </Typography>

          <Typography
            style={{ fontSize: '20px' }}
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 'bold',
              transform: `scale(${1 + count * 0.03})`,
              transition: 'transform 0.3s ease',
              textShadow: count > 2 ? '0 0 20px rgba(255, 0, 0, 0.7)' : 'none'
            }}
          >
            Welcome to the realm of doom and despair... trust me click this 5 times.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleClick}
            sx={{
              padding: '12px 36px',
              fontSize: '1.2rem',
              transform: `scale(${1 - count * 0.05})`,
            }}
          >
            meow ({count}/5)
          </Button>

          {showVideo && <VideoPlayer />}
        </Container>
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            bgcolor: "black",
            opacity: blackout ? 1 : 0,
            transition: "opacity 0.75s ease",
            pointerEvents: "none",
            zIndex: 999,
          }}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
