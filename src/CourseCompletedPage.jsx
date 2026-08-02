// Very bare bones page, would be much more flashy in the completed thing!
import React from 'react';
import { Typography } from '@mui/material';

function CourseCompletedPage() {
    return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', justifySelf: 'center', width: '45%', marginTop: '5%' }}>
      <Typography variant="h3" gutterBottom style={{ textAlign: 'left', marginBottom: '15px' }}>
        Congrats!<br />You have successfully completed this course.
      </Typography>
      <Typography variant="subtitle1" gutterBottom style={{ textAlign: 'left', marginBottom: '15px' }}>
        There is still more to be added to this course. Check back for future updates!
        </Typography>
    </div>
  );
}

export default CourseCompletedPage;