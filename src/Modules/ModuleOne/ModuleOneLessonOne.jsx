import React, { useState } from "react";
import LessonComponent from "../reuseableComponents/LessonComponent";
import TranscriptComponent from "../reuseableComponents/TranscriptComponent";
import SourcesComponent from "../reuseableComponents/SourcesComponent";
import reference from "./ModuleOneReferences/lesson_one.json";
import quizQuestion from './ModuleOneQuizQuestions/lesson_one.json';
import transcript from './ModuleOneTranscripts/lesson_one.json';

import Box from "@mui/material/Box";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import QuestionComponent from "../reuseableComponents/QuestionComponent";
import { Button, Typography } from "@mui/material";

function ModuleOneLessonOne() {
  const [questionCompleted, setQuestionCompleted] = useState(false);

  const handleCorrectSubmit = (result) => {
    setQuestionCompleted(result);
  }

  return (
    <Box
      id="module-1-lesson-1-box"
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
        Lesson 1.1: Introduction
      </h1>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <LessonComponent
          url="https://www.youtube.com/embed/3pOBXEIuDTc?si=hoCgPxgZBG-7u3N7"
          number="1"
          title="Introduction to AI"
          description="What is this course?"
        />
      </Box>
      <TranscriptComponent transcript={transcript} />
      <SourcesComponent sources={reference} />
      <QuestionComponent onCorrectSubmit={handleCorrectSubmit} quiz={quizQuestion} />
       <div style={{ marginTop: '15px', marginBottom: '15px', width: 'stretch', textAlign: 'right' }}>
        <Button disabled={!questionCompleted} endIcon={<ArrowForwardIcon />} component={Link} to="/module-1-lesson-2" variant="outlined" style={{ borderRadius: '10px', width: 'max-content', padding: '10px 30px 10px 30px', textTransform: 'none' }}>
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

export default ModuleOneLessonOne;
