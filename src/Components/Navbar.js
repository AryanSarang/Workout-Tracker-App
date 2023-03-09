import React from "react"
import { Link } from "react-router-dom";
import { Stack,Typography } from '@mui/material';
import Logo from "../assets/images/Logo.png";
const Navbar = () => {
 

  return (
    
      <Stack direction="row" 
      justifyContent="space-around"
      sx={{gap:{sm:"122px",xs:"40px",
      mt:{sm:"32px",xs:"20px"},justifyContent:"none"}}} px="20px">
        <Link to="/">
          <img src={Logo} alt="logo" style=
          {{ width: "48px", height: "48px", margin: "20px 20px 0" }} />
        </Link>
        <Stack direction="row"
          gap="40px"
          fontSize="24px" 
          alignItems="flex-end" fontWeight="600">
          <Link to="/" style={{
            textDecoration: "none", color: "#3A1212"
            // borderBottom: "3px solid #FF2625" 
          }}
          >
          <Typography style={{
            textDecoration: "none",fontSize:"25px" ,fontWeight:"600", color: "#3A1212"
            // borderBottom: "3px solid #FF2625" 
          }}>
          Home
          </Typography></Link>
          <a href="#exercises"  style={
            { textDecoration: "none", color: "#3A1212" }}
          ><Typography style={{
            textDecoration: "none",fontSize:"25px" ,fontWeight:"600", color: "#3A1212"
            // borderBottom: "3px solid #FF2625" 
          }}>
          Exercises
          </Typography></a>
          <Link to="/Tracker" style={{
            textDecoration: "none", color: "#3A1212"
            
          }}
          >
          <Typography style={{
            textDecoration: "none",fontSize:"25px" ,fontWeight:"600", color: "#3A1212"
            
          }}>
          Track
          </Typography></Link>
        </Stack>
      </Stack>

  )
};

export default Navbar;
