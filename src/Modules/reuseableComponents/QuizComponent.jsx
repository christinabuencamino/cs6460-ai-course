/**
 * This component is based on Material UI's Radio button demo:
 * https://mui.com/material-ui/react-radio-button/
 * And:
 * - https://medium.com/@chanchal.panpaliya/multiple-choice-quiz-app-using-material-ui-and-react-js-11a65a5cccc9
 * - GitHub copilot bug/compilation issue assistance
 */
import * as React from "react";
import { useNavigate } from 'react-router-dom';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function QuizComponent({ title, description, nav, quizQuestions }) {
  const questionList = Object.values(quizQuestions);

  const id = React.useId();
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState({});
  const [currentAnswers, setCurrentAnswers] = React.useState({});
  const navigate = useNavigate();

  const handleRadioChange = (index, e) => {
    e.preventDefault();
    setCurrentAnswers((prevState) => ({
      ...prevState,
      [index]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let quizCorrect = true;

    Object.entries(currentAnswers).forEach(([index, value]) => {
      if (!questionList[index].answers[value].isCorrect) {
        quizCorrect = false;
        setHelperText((prevState) => ({
          ...prevState,
          [index]: "Incorrect",
        }));
      } else {
        setHelperText((prevState) => ({
          ...prevState,
          [index]: "Correct",
        }));
      }
    });

    if (quizCorrect) {
      setError(false);
      navigate(nav);
    } else if (!quizCorrect) {
      setError(true);
    } else {
      setError(true);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: 5,
        alignItems: "flex-start",
        width: "stretch",
        textAlign: 'left',
      }}
    >
      <Typography variant="h3" align="left" style={{ marginBottom: 20 }}>
        {title}
      </Typography>
      <Typography variant="h7" align="left" style={{ marginBottom: 20 }}>
        {description}
      </Typography>
      {questionList.map((quiz, index) => {
        return (
          <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
            <FormControl error={error && helperText[index] === "Incorrect"}>
              <FormLabel id={`${id}-label`}>{index+1}. {quiz.question}</FormLabel>
              <RadioGroup
                aria-labelledby={`${id}-label`}
                name="radio-buttons-group"
                value={currentAnswers[index] || null}
                onChange={(e) => handleRadioChange(index, e)}
              >
                {quiz.answers.map((q, index) => {
                  return (
                    <FormControlLabel
                      value={index}
                      control={<Radio />}
                      label={q.answer}
                    />
                  );
                })}
              </RadioGroup>
              <FormHelperText style={{ marginLeft: 0 }}>{helperText[index]}</FormHelperText>
            </FormControl>
          </form>
        );
      })}
      <Button
        onClick={handleSubmit}
        sx={{ mt: 1, mr: 1 }}
        type="submit"
        variant="outlined"
        disabled={currentAnswers && title === "Final Quiz" ? Object.keys(currentAnswers).length < 10 : Object.keys(currentAnswers).length < 5}
      >
        Check Answer
      </Button>
    </Box>
  );
}

export default QuizComponent;
