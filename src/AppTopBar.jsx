// This page uses Material UI's demo on their App Bar: https://mui.com/material-ui/react-app-bar/
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

function AppTopBar() {
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#FFFFFF'}}>
                <Toolbar style={{ border: '1px solid #d6d6d6'}}>
                    <IconButton
                        aria-label="home"
                        component={Link}
                        to="/"
                    >
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#000000', fontWeight: 'bold' }}>
                         AI Literacy For Adults Who Support Adolescents & Children
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default AppTopBar;