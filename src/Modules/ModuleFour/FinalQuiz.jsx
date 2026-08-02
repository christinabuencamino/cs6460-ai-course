import React from "react";

import Box from "@mui/material/Box";
import QuizComponent from "../reuseableComponents/QuizComponent";
import finalQuizQuestions from './ModuleFourQuizQuestions/final_quiz.json';

function FinalQuiz() {
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
      <QuizComponent title="Final Quiz" description="This is the final course for the quiz, and will test your knowledge on everything you have learned. Good luck!" nav={"/complete"} quizQuestions={finalQuizQuestions} />
    </Box>
  );
}

export default FinalQuiz;