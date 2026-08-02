/**
 * This page (and course) relies on a Figma Mock prototype for styling, but does NOT use any code produced from Figma.
 * See session here: https://www.figma.com/make/kmUBBshOJF9nKrsJpDIsmj/Educational-website-builder?p=f&t=NA2FB1BISSwwB6fY-0
 */

import { Card, Chip, Typography, CardContent, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', justifySelf: 'center', width: '45%', marginTop: '5%' }}>
      <Chip label="4 Modules | 13 Lessons" style={{ width: 'fit-content', marginBottom: '15px' }} />
      <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', textAlign: 'left', marginBottom: '15px' }}>
        AI Literacy For Adults Who Support Children & Adolescents
      </Typography>
      <Typography variant="subtitle1" gutterBottom style={{ textAlign: 'left', marginBottom: '15px' }}>
        Welcome to the course. Here, you will learn about the different ways generative AI can impact your child or adolescents life, and the different solutions that exist so that you may know how to protect them from potential harm. By the end of this course, you should have a much better understanding of generative AI, how children/adolescents approach generative AI, the types of harm that can come from using generative AI, and what people are doing today to address these concerns.
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', textAlign: 'left', marginBottom: '15px', marginLeft: '-5px' }}>
        <div>
          <Card variant="outlined" style={{ borderRadius: '20px', margin: '10px 10px 10px 0px', width: '16rem', height: '150px' }}>
            <React.Fragment>
              <CardContent>
                <Typography variant="h6" component="div" style={{ fontWeight: 'bold', color: '#1976d2' }}>
                  Module 1
                </Typography>
                <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                  Introduction
                </Typography>
                <Typography variant="body1">
                  Introduction to generative AI and why children are at risk.
                </Typography>
              </CardContent>
            </React.Fragment>
          </Card>
          <Card variant="outlined" style={{ marginLeft: 0, borderRadius: '20px', margin: '10px 10px 10px 0px', width: '16rem', height: '150px' }}>
            <React.Fragment>
              <CardContent>
                <Typography variant="h6" component="div" style={{ fontWeight: 'bold', color: '#1976d2' }}>
                  Module 3
                </Typography>
                <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                  Common Pitfalls
                </Typography>
                <Typography variant="body1">
                  Walks through common types of harmful outcomes.
                </Typography>
              </CardContent>
            </React.Fragment>
          </Card>
        </div>
        <div>
          <Card variant="outlined" style={{ borderRadius: '20px', margin: '10px', width: '16rem', height: '150px' }}>
            <React.Fragment>
              <CardContent>
                <Typography variant="h6" component="div" style={{ fontWeight: 'bold', color: '#1976d2'  }}>
                  Module 2
                </Typography>
                <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                  Psychology & Design
                </Typography>
                <Typography variant="body1">
                  Discusses the foundations of unhealthy interactions.
                </Typography>
              </CardContent>
            </React.Fragment>
          </Card>
          <Card variant="outlined" style={{ borderRadius: '20px', margin: '10px', width: '16rem', height: '150px' }}>
            <React.Fragment>
              <CardContent>
                <Typography variant="h6" component="div" style={{ fontWeight: 'bold', color: '#1976d2'  }}>
                  Module 4
                </Typography>
                <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                  Solutions
                </Typography>
                <Typography variant="body1">
                  Reviews existing resources for mitigating harm.
                </Typography>
              </CardContent>
            </React.Fragment>
          </Card>
        </div>
      </div>
      <Button endIcon={<SendIcon />} component={Link} to="/module-1-lesson-1" variant="contained" style={{ marginBottom: '10rem', borderRadius: '10px', width: 'max-content', padding: '10px 30px 10px 30px', textTransform: 'none' }}>
        <Typography variant="h6" component="div">
          Begin Course
        </Typography>
      </Button>
    </div>
  );
}

export default HomePage;