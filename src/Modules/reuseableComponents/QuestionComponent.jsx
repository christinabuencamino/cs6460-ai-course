/**
 * This component is based on Material UI's Radio button demo:
 * https://mui.com/material-ui/react-radio-button/
 * And:
 * - https://medium.com/@chanchal.panpaliya/multiple-choice-quiz-app-using-material-ui-and-react-js-11a65a5cccc9
 * - GitHub copilot bug/compilation issue assistance
 */

import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  FormControl,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Button,
  FormHelperText
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QuizIcon from "@mui/icons-material/Quiz";

function QuestionComponent({ onCorrectSubmit, quiz }) {
  const id = React.useId();
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Select an option.');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setError(false);
    setHelperText('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (quiz.answers[value].isCorrect === true) {
      setHelperText('Correct!');
      setError(false);
      onCorrectSubmit(true);
    } else if (quiz.answers[value].isCorrect === false) {
      setHelperText('Incorrect');
      setError(true);
    } else {
      setHelperText('Please select an answer.');
      setError(true);
    }
  };

  return (
    <div style={{ marginTop: "15px", marginBottom: "15px" }}>
      <Accordion
        sx={{
          justifySelf: "center",
          minWidth: "700px",
          marginBottom: "15px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            "&:hover": {
              backgroundColor: "#f8faff",
            },
          }}
        >
          <QuizIcon sx={{ alignSelf: "center" }} />
          <Typography variant="h6" component="span" sx={{ marginLeft: "10px" }}>
            Lesson Quiz
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ textAlign: "left" }}>
            <form onSubmit={handleSubmit}>
          <FormControl error={error}>
            <FormLabel id={`${id}-label`}>
              {quiz.question}
            </FormLabel>
            <RadioGroup
              aria-labelledby={`${id}-label`}
              name="radio-buttons-group"
              value={value}
          onChange={handleRadioChange}
            >
                {quiz.answers.map((q, index) => {
                    return (
                        <FormControlLabel
                            value={index}
                            control={<Radio />}
                            label={q.answer}
                        />
                    )
                })}
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
            <Button sx={{ mt: 1, mr: 1, width: 'fit-content' }} type="submit" variant="outlined">
          Check Answer
        </Button>
          </FormControl>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default QuestionComponent;
