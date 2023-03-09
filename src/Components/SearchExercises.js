import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Button, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCategories from "./ExerciseCategories";
import muscles from '../utils/muscles';
import BodyPart from "./BodyPart";
import Exercises from "../Pages/Exercises";
import ExerciseDetail from "./ExerciseDetail";

const SearchExercises = ({ setSearch,search, muscleData, setMuscleData }) => {
  
  return (
    <Stack id="exercises" alignItems="center" mt="37px"
      justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{
        fontSize: { lg: '44px', xs: '30px' }
      }} mb="50px" textAlign="center">
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField sx={{
          input: {
            fontWeight: '700', border: 'none',
            borderRadius: '4px'
          }, width: { lg: '800px', xs: '350px' },
          backgroundColor: '#fff', borderRadius: '40px'
        }}
          height="76px"
          value={search}
        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Link to="/SearchedExercises"><Button className="search-btn" sx={{
          bgcolor: '#ff2625', color: '#fff',
          textTransform: 'none', width: { lg: '175px', xs: '80px' },
          fontSize: { lg: '20px', xs: '14px' },
          height: '56px', position: 'absolute', right: '0'
        }}
        >
          Search
        </Button></Link>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        {/* <ExerciseCategories data={bodyParts}  bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        /> */}
        <ExerciseCategories muscleData={muscleData} setMuscleData={setMuscleData} />
      </Box>
    </Stack>
  )
};

export default SearchExercises;
