// This component is based on MUI's Accordion demo: https://mui.com/material-ui/react-accordion/
import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

// expects a prop like: <TranscriptComponent transcript="hello world" />
function TranscriptComponent({ transcript }) {
  return(
<div style={{ marginTop: '15px', marginBottom: '15px' }}>
      <Accordion
        sx={{
          justifySelf: "center",
          maxWidth: "700px",
          textAlign: 'left',
          marginBottom: '15px',
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
          <BookmarkBorderIcon sx={{ alignSelf: "center" }} />
          <Typography variant="h6" component="span" sx={{ marginLeft: "10px" }}>
            Transcript
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ overflowY: 'scroll', whiteSpace: 'break-spaces' }}>
                {transcript.transcript}
                <br />
            </AccordionDetails>
      </Accordion>
    </div>
  );
}


export default TranscriptComponent;