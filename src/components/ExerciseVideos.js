import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideos = ({ name, exerciseVideos }) => {
  console.log({ name, exerciseVideos });
  // if (!exerciseVideos?.length) return <Loader />;
  {
    return !exerciseVideos.length > 0 ? (
      <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
        <Typography variant="h3" mb="33px">
          Watch{" "}
          <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
            {name}
          </span>{" "}
          exercise videos
        </Typography>
        <Stack
          justifyContent="flex-start"
          flexWrap="wrap"
          alignItems="center"
          sx={{
            flexDirection: { lg: "row" },
            gap: { lg: "110px", xs: "0" },
          }}
        >
          {exerciseVideos?.slice(0, 3)?.map((exerciseVideo, index) => {
            return (
              <a
                key={index}
                className="exercise-video"
                href={`https://www.youtube.com/watch?v=${exerciseVideo.video.videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={exerciseVideo.video.thumbnails[0].url}
                  alt={exerciseVideo.video.title}
                />
              </a>
            );
          })}
        </Stack>
      </Box>
    ) : (
      "Loading..."
    );
  }
};

export default ExerciseVideos;
