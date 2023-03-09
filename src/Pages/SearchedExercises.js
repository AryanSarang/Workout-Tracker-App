import React, { useEffect, useState } from "react";
import { Stack, Box, Grid, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseDetail from '../Components/ExerciseDetail';

const SearchedExercises = ({ search, setSearch, exercises, setExercises }) => {
    const [data, setData] = useState([]);
    const [isFetched, setIsFetched] = useState(false);
    const fetchExercisesData = async (params) => {
        const muscleResponse = await fetchData(`https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${params}`, exerciseOptions);
        const typeResponse = await fetchData(`https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=${params}`, exerciseOptions);
        const nameResponse = await fetchData(`https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?name=${params}`, exerciseOptions);
        setData([...muscleResponse, ...typeResponse, ...nameResponse]);
       console.log(data);
    }

    useEffect(() => {
        fetchExercisesData(search);
    }, []);
    return (
        <Box mt="90px" mx="100px" sx={{ flexGrow: 1 }}>
            <Typography color="#FF2625"
                fontWeight="550" fontSize="40px"> 
                searched result for "{search}" exercises
            </Typography>
            <Box mt="20px" mx="10px" sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                    {data.map((index) => (
                        <Grid item xs={2} sm={4} md={4} key={index.name} >
                            <ExerciseDetail exerciseData={index}  exercises={exercises} setExercises={setExercises}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
};

export default SearchedExercises;
