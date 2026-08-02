import React from "react";

import Box from "@mui/material/Box";
import QuizComponent from "../reuseableComponents/QuizComponent";
import quizQuestions from "./ModuleOneQuizQuestions/module_quiz.json";

function ModuleOneQuiz() {
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
      <QuizComponent title="Module 1 Quiz" description="This is the Module 1 Quiz. Completing this will take you to Module 2. Good luck!" nav={"/module-2-lesson-1"} quizQuestions={quizQuestions} />
    </Box>
  );
}

export default ModuleOneQuiz;