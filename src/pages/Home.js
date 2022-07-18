import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import useSearch from "../hooks/useSearch";

const Home = () => {
  const {
    search,
    setSearch,
    handleSearch,
    exercises,
    setExercises,
    bodyParts,
    bodyPart,
    setBodyPart,
  } = useSearch();

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        bodyParts={bodyParts}
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
