// This component is based on MUI's Accordion demo: https://mui.com/material-ui/react-accordion/
import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SourceIcon from '@mui/icons-material/Source';

function SourcesComponent({ sources }) {
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
        expandIcon={<ExpandMoreIcon/>}
        sx={{
            "&:hover": {
              backgroundColor: "#f8faff",
            },
          }}
        >
          <SourceIcon sx={{ alignSelf: "center" }} />
          <Typography variant="h6" component="span" sx={{ marginLeft: "10px" }}>
            References
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            {Object.values(sources).map((text, index) => (
              <Typography key={index} variant="body1" sx={{ paddingBottom: 2}}>
                [{index+1}] {text}
              </Typography>
            ))}
          </AccordionDetails>
      </Accordion>
    </div>
  );
}


export default SourcesComponent;
