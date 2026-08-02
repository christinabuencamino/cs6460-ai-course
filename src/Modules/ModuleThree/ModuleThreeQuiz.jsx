import React from "react";

import Box from "@mui/material/Box";
import QuizComponent from "../reuseableComponents/QuizComponent";
import quizQuestions from './ModuleThreeQuizQuestions/module_quiz.json';

function ModuleThreeQuiz() {
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
      <QuizComponent title="Module 3 Quiz" description="This is the Module 3 Quiz. Completing this will take you to Module 4. Good luck!" nav={"/module-4-lesson-1"} quizQuestions={quizQuestions} />
    </Box>
  );
}

export default ModuleThreeQuiz;