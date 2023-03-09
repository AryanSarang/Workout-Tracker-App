import React,{useState} from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Exercises from './Pages/Exercises';
import SearchedExercises from "./Pages/SearchedExercises";
import Tracker from './Pages/Tracker';

import './App.css';
function App() {
  const [muscleData, setMuscleData] = useState([]);
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);
  return (
    <div className="App">
      <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home  muscleData={muscleData} search={search}
         exercises={exercises} setExercises={setExercises} setSearch={setSearch} setMuscleData={setMuscleData}/>}/>
        <Route path="/Exercises" element={<Exercises  muscleData={muscleData}
         setMuscleData={setMuscleData} exercises={exercises} setExercises={setExercises}/>}/>
        <Route path="/SearchedExercises" element={<SearchedExercises search={search}  
        exercises={exercises} setExercises={setExercises} setSearch={setSearch} />}/>
        <Route path="/Tracker" element={<Tracker search={search}  
        exercises={exercises} setExercises={setExercises} setSearch={setSearch} />}/>
      </Routes> 
      <Footer/>
      </Box>
    </div>
  );
}

export default App;
