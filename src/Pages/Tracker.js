import React, { useEffect, useState } from "react";
import { Stack, Box, Grid, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseDetail from '../Components/ExerciseDetail';

const Tracker = ({ exercises, setExercies }) => {
  

  return (
    <Box mt="90px" mx="100px" sx={{ flexGrow: 1 }}>
      <Typography color="#FF2625"
        fontWeight="550" fontSize="40px">
        Your added exercises are shown here
      </Typography>
      <Box mt="20px" mx="10px" sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 4, md: 12 }}>
          {exercises.length > 0 ? exercises.map((index) => (
            <Grid item xs={2} sm={4} md={4} key={index.name} >
              <ExerciseDetail exerciseData={index} />
            </Grid>
          )) : <Typography ml="400px" mt="100px"
            fontWeight="400" fontSize="40px">
          Start adding some exercises to track
          </Typography>}
        </Grid>
      </Box>
    </Box>
  )
};

export default Tracker;