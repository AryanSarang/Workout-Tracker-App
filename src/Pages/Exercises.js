import React, { useEffect, useState } from "react";
import { Stack, Box, Grid, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseDetail from '../Components/ExerciseDetail';

const Exercises = ({ muscleData, setMuscleData,exercises,setExercises}) => {
  const [data, setData] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  const fetchExercisesData =  (param) => {
    const response = fetchData(`https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${param}`, exerciseOptions);

    response.then(response => {
      setIsFetched(true);
      setData(response);
    })
      .catch(e => {
        console.log("error", e);
        setIsFetched(true);
      });
  }

  useEffect(() => {
    fetchExercisesData(muscleData);
  }, []);
  return (
    <Box  mt="90px" mx="100px" sx={{ flexGrow: 1}}>
      <Typography color="#FF2625"
        fontWeight="600" fontSize="40px">
        Exercises to improve your {muscleData}
      </Typography>
      <Box mt="20px"  mx="10px" sx={{ flexGrow: 1}}>
        <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 4, md: 12 }}>
          {data.map((index) => (
            <Grid item xs={4} sm={4} md={4} key={index.name} >
              <ExerciseDetail exerciseData={index}  exercises={exercises} setExercises={setExercises}/>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
};

export default Exercises;
