import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Stack } from '@mui/material';
function Copyright() {
  return (
    <Typography variant="body2" sx={{ml:25, mt:5}} color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/AryanSarang?tab=repositories">
        RN
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      component="footer"
      sx={{
        py: 5,position:'relative',mx:-2.8,
        mt: '100px',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Stack direction="row" 
      justifyContent="space-around"
      sx={{gap:{sm:"40px",xs:"20px",
      mt:{sm:"32px",xs:"20px"},justifyContent:"center"}}}
      >
      <Link href='https://github.com/AryanSarang?tab=repositories'  style={{ textDecoration: 'none',color: '#FF2625' }}><GitHubIcon /></Link>
          
          <Link href="https://instagram.com/thearyanshow" style={{ textDecoration: 'none',color: '#FF2625' }}><InstagramIcon /></Link>
          <Link href="https://www.linkedin.com/in/aryan-sarang-0ab44120b" style={{ textDecoration: 'none',color: '#FF2625' }}><LinkedInIcon /></Link>
          <Link style={{ textDecoration: 'none',color: '#FF2625' }}><TwitterIcon /></Link>

        </Stack>
        <Copyright />
      </Container>
    </Box>
  );
}