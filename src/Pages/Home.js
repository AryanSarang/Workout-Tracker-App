import React, { useState } from "react"
import { Box } from "@mui/material";
import Exercises from "./Exercises";
import HeroBanner from "../Components/HeroBanner";
import SearchExercises from "../Components/SearchExercises";

const Home = ({muscleData,setMuscleData,exercises,setExercises,search,setSearch}) => {
  const [bodyPart, setBodyPart] = useState('all');
  
  return (
    <Box>
      <HeroBanner />
      <SearchExercises muscleData={muscleData} setMuscleData={setMuscleData} exercises={exercises}
        setExercises={setExercises} search={search} setSearch={setSearch}
        bodyPart={bodyPart} setBodyPart={setBodyPart} />
    </Box>
  )
};

export default Home;
