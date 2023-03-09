import React from "react";
import { CardContent, Accordion, AccordionSummary, AccordionDetails, Card, CardActions, Button, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ExerciseDetail = ({ exerciseData,exercises,setExercises }) => {
 const currentExercies=exerciseData;
  return (
    <Card sx={{ maxWidth: 345 }} xs={2} sm={4} md={4}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {exerciseData.name}
        </Typography>
        <Typography variant="h6" color="text.secondary" >
          Type:{exerciseData.type}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Muscle:{exerciseData.muscle}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Equipment:{exerciseData.equipment}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Difficulty:{exerciseData.difficulty}
        </Typography>
        {/* <Typography variant="body1" color="text.secondary"> */}

        {/* Instructions:{exerciseData.instructions.substring(0, 100)} */}
        {/* </Typography> */}
      </CardContent>
      <CardActions >

        <Accordion >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          ><Typography sx={{ width: '33%', flexShrink: 0 }}>
              <Button size="small" title="Add" ><AddCircleIcon onClick={()=>{setExercises(oldExr => [...oldExr, currentExercies])}} style={{ color: "#FF2625" }} /></Button>
            </Typography>
            <Typography >Instructions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography >
              {exerciseData.instructions}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </CardActions>
    </Card>
  )
};

export default ExerciseDetail;
