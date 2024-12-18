import React, { useState, useRef } from "react";
import { Card, Box, IconButton, useTheme, useMediaQuery } from "@mui/material";
import { videos } from "../../utils/data";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const VideoPlayer = ({isVisibleSide , setIsVisibleSide}) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const videoRef = useRef(null);

  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex < videos.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : videos.length - 1
    );
  };

  const togglePlayPause = () => {
    if (isPaused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPaused(!isPaused);
  };

  const handleVideoPlay = () => setIsPaused(false);
  const handleVideoPause = () => setIsPaused(true);

  return (
    <Card
      sx={{
        position: "relative",
      }}
    >
      {/* Video Container */}
      <Box
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <video
          ref={videoRef}
          key={videos[currentVideoIndex].src}
          width="100%"
          height={isMobile ? "100%" : "500px" } 
          controls
          autoPlay
          onPlay={handleVideoPlay}
          onPause={handleVideoPause}
        >
          <source src={videos[currentVideoIndex].src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay on Pause */}
        {isPaused && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              zIndex: 3,
            }}
          >
            <IconButton
              onClick={togglePlayPause}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                pointerEvents: "auto",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
              }}
            >
              <PlayArrowIcon sx={{ fontSize: 60, color: "black" }} />
            </IconButton>
          </Box>
        )}

        {/* Next and Previous Buttons */}
        {showControls && (
          <>
            <IconButton
              onClick={handlePrev}
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
                zIndex: 2,
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>

            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                right: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
                zIndex: 2,
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </>
        )}

        {/* Extends  */}
        {(isVisibleSide ) && (
          <Box
            onClick={() => setIsVisibleSide(false)}
            sx={{
              position: "absolute",
              top: "20%",
              transform: "translateY(-50%)",
              right: "-20px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
              zIndex: 1000,
              width:"100px",
              padding:"7px",
              paddingLeft:"10px",
              cursor:"pointer",
              borderRadius:"5px",
            }}
          >
            <ArrowBackIosIcon />
          </Box>
        )}
      </Box>
    </Card>
  );
};

export default VideoPlayer;
