import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import sampleVideo from "./assets/yea.mp4";

function VideoPlayer() {
    const videoRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = 1;

            videoRef.current.play().catch(console.error);

            // Wait one frame before fading in
            requestAnimationFrame(() => {
                setVisible(true);
            });
        }
    }, []);

    return (
        <Box
            sx={{
                position: "fixed",
                inset: 0,
                bgcolor: "black",
                zIndex: 99999,

                opacity: visible ? 1 : 0,
                transition: "opacity 1.2s ease",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                component="video"
                ref={videoRef}
                autoPlay
                loop
                playsInline
                src={sampleVideo}
                sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />
        </Box>
    );
}

export default VideoPlayer;