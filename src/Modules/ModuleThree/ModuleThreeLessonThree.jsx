import React, { useState } from "react";
import LessonComponent from "../reuseableComponents/LessonComponent";
import TranscriptComponent from "../reuseableComponents/TranscriptComponent";
import SourcesComponent from "../reuseableComponents/SourcesComponent";
import reference from './ModuleThreeReferences/lesson_three.json';
import quizQuestion from './ModuleThreeQuizQuestions/lesson_three.json';
import transcript from './ModuleThreeTranscripts/lesson_three.json';

import Box from "@mui/material/Box";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import QuestionComponent from "../reuseableComponents/QuestionComponent";
import { Button, Typography } from "@mui/material";

function ModuleThreeLessonTwo() {
    const [questionCompleted, setQuestionCompleted] = useState(false);
    
      const handleCorrectSubmit = (result) => {
        setQuestionCompleted(result);
      }
    
  return (
    <Box
      id="module-1-lesson-2-box"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: "min-content",
        width: "700px",
      }}
    >
      <h1
        style={{
          width: "stretch",
          textAlign: "left",
          marginTop: "50px",
        }}
      >
        Lesson 3.2: Emotional Harm
      </h1>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <LessonComponent
          url="https://www.youtube.com/embed/A_ARdlrNy70?si=4NDMvDs8_BSaBrlN"
          number="2"
          title="Introduction to AI"
          description="Who Should Take This Course?"
        />
      </Box>
      <TranscriptComponent transcript={transcript} />
      <SourcesComponent sources={reference} />
      <QuestionComponent onCorrectSubmit={handleCorrectSubmit} quiz={quizQuestion} />
      <div
        style={{
          marginTop: "15px",
          marginBottom: "15px",
          width: "stretch",
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Button
          startIcon={<ArrowBackIcon />}
          component={Link}
          to="/module-3-lesson-2"
          variant="outlined"
          style={{
            borderRadius: "10px",
            width: "max-content",
            padding: "10px 30px 10px 30px",
            textTransform: "none",
          }}
        >
          <Typography variant="h6" component="div">
            Previous Lesson
          </Typography>
        </Button>
        <Button
        disabled={!questionCompleted}
          endIcon={<ArrowForwardIcon />}
          component={Link}
          to="/module-3-lesson-4"
          variant="outlined"
          style={{
            borderRadius: "10px",
            width: "max-content",
            padding: "10px 30px 10px 30px",
            textTransform: "none",
          }}
        >
          <Typography variant="h6" component="div">
            Next Lesson
          </Typography>
        </Button>
      </div>
      <br />
      <br />
    </Box>
  );
}

export default ModuleThreeLessonTwo;