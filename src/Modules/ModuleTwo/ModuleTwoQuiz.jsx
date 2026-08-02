import React from "react";

import Box from "@mui/material/Box";
import QuizComponent from "../reuseableComponents/QuizComponent";
import quizQuestions from "./ModuleTwoQuizQuestions/module_quiz.json";

function ModuleTwoQuiz() {
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
      <QuizComponent title="Module 2 Quiz" description="This is the Module 2 Quiz. Completing this will take you to Module 3. Good luck!" nav={"/module-3-lesson-1"} quizQuestions={quizQuestions} />
    </Box>
  );
}

export default ModuleTwoQuiz;