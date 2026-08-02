// NOTE: This lesson is not published, so the page is stubbed.
import React from "react";

import Box from "@mui/material/Box";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

function ModuleFourLessonThree() {
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
        (Unpublished) Lesson 4.3: Individual Solutions
      </h1>
      <h2 style={{ textAlign: "left"}}>
        The purpose of this lesson is to go over independent/grassroots solutions, as well as provide recommendations to caregivers on ways to approach their children about these issues proactively.
        <br /><br />This lesson has not been published yet due to project time constraints. Please move on to the final quiz!
      </h2>
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
          to="/module-4-lesson-2"
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
          endIcon={<ArrowForwardIcon />}
          component={Link}
          to="/final-quiz"
          variant="outlined"
          style={{
            borderRadius: "10px",
            width: "max-content",
            padding: "10px 30px 10px 30px",
            textTransform: "none",
          }}
        >
          <Typography variant="h6" component="div">
            Final Quiz
          </Typography>
        </Button>
      </div>
      <br />
      <br />
    </Box>
  );
}

export default ModuleFourLessonThree;
