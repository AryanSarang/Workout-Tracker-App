import React, { useState } from "react";
import { Link } from "react-router-dom";
import { experimentalStyled as styled } from '@mui/material/styles';
import { Stack, Paper, Box, Grid } from '@mui/material';
import muscles from '../utils/muscles';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const ExerciseCategories = ({muscleData,setMuscleData}) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#FFFAFB',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid container justifyContent="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
        {muscles.map((index) => (
          <Grid item xs={4} sm={4} md={3.4} key={index.muscle} >
            <Link to="/Exercises"  style={{ textDecoration: 'none' }}> <Item type="button" sx={{
              cursor: 'pointer'
            }} onClick={() => setMuscleData(index.muscle)} className="zoom">
              <img alt="bodypart" src={index.gifurl} /><h1 style={{ color: '#ff6f79' }}>
                {index.muscle}</h1></Item></Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
};

export default ExerciseCategories;
