/**
 * This page is based on MUI's Accordion and Card demos:
 * https://mui.com/material-ui/react-accordion/
 * https://mui.com/material-ui/react-card/
 */
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

function LessonComponent({ url, number }) {
  return (
    <div style={{ marginBottom: '15px' }}>
      <Accordion
        sx={{
          justifySelf: "center",
          maxWidth: "700px",
          marginBottom: '15px',
          '&:hover': {
          backgroundColor: '#f8faff',
          },
        }}
        defaultExpanded
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <OndemandVideoIcon sx={{ alignSelf: "center" }} />
          <Typography variant="h6" component="span" sx={{ marginLeft: "10px" }}>
            Lesson Video
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }}>
          <Card sx={{ width: '700px', border: "none" }}>
            <CardMedia
              sx={{
                height: '375px',
                width: "90%",
                justifySelf: "center",
                marginTop: 3,
              }}
              component="iframe"
              title="lesson-component"
              controls
              image={url}
              allowFullScreen
            />
            <CardContent></CardContent>
          </Card>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default LessonComponent;
