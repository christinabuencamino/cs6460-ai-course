// Based on https://mui.com/material-ui/react-drawer/?_gl=1*a3bf55*_up*MQ..*_ga*MTM3NTEwMjY3Mi4xNzgyNzgzMTU1*_ga_5NXDQLC2ZK*czE3ODI3ODMxNTUkbzEkZzAkdDE3ODI3ODMxNTUkajYwJGwwJGgw
// Dropdown logic based on https://medium.com/gammastack/making-a-nested-sidebar-menu-in-react-f8595031995e
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Divider } from '@mui/material';

function SideBar() {
    const [openDropdowns1, setOpenDropdowns1] = useState({});
    const [openDropdowns2, setOpenDropdowns2] = useState({});
    const [openDropdowns3, setOpenDropdowns3] = useState({});
    const [openDropdowns4, setOpenDropdowns4] = useState({});

    const handleDropdownClick1 = (index) => {
        setOpenDropdowns1((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const handleDropdownClick2 = (index) => {
    setOpenDropdowns2((prev) => ({
        ...prev,
        [index]: !prev[index],
    }));
    };

    const handleDropdownClick3 = (index) => {
    setOpenDropdowns3((prev) => ({
        ...prev,
        [index]: !prev[index],
    }));
    };

    const handleDropdownClick4 = (index) => {
    setOpenDropdowns4((prev) => ({
        ...prev,
        [index]: !prev[index],
    }));
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                sx={{
                width: 300,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 300,
                    boxSizing: 'border-box',
                    position: 'relative',
                    height: '100%',
                },
                }}
                variant="permanent"
                anchor="left"
            >
                <h4 style={{ paddingLeft: 15, color: 'grey' }}>COURSE CONTENTS</h4>
                <Divider />
                <List>
                {['Module 1: Introduction'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ flexFlow: 'column' }}>
                        <ListItemButton sx={{ width: 'stretch' }} onClick={() => handleDropdownClick1(index)}>
                            <ListItemText
                                primary={text}
                                primaryTypographyProps={{ fontWeight: 600 }}
                            />
                            {openDropdowns1[index] ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse sx={{ width: 'stretch' }} in={openDropdowns1[index]} unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4, width: '100%' }} to="/cs6460-ai-course/#/module-1-lesson-1">
                                <ListItemText primary="Lesson 1.1: Welcome to the Course" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4, width: 'stretch' }} to="/cs6460-ai-course/#/module-1-lesson-2">
                                <ListItemText primary="Lesson 1.2: GenAI In Real Life" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4, width: 'stretch' }} to="/cs6460-ai-course/#/module-1-lesson-3">
                                <ListItemText primary="Lesson 1.3: Why These Tools Are So Popular" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </ListItem>
                ))}
                {['Module 2: Psychology'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ flexFlow: 'column' }}>
                        <ListItemButton sx={{ width: 'stretch' }} onClick={() => handleDropdownClick2(index)}>
                            <ListItemText
                                primary={text}
                                primaryTypographyProps={{ fontWeight: 600 }}
                            />
                            {openDropdowns2[index] ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse sx={{ width: 'stretch' }} in={openDropdowns2[index]} unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4, width: '100%' }} to="/cs6460-ai-course/#/module-2-lesson-1">
                                <ListItemText primary="Lesson 2.1: GenAI's Design" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4, width: 'stretch' }} to="/cs6460-ai-course/#/module-2-lesson-2">
                                <ListItemText primary="Lesson 2.2: Emotional Attachments" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4, width: 'stretch' }} to="/cs6460-ai-course/#/module-2-lesson-3">
                                <ListItemText primary="Lesson 2.3: Trusting GenAI" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </ListItem>
                ))}
                {['Module 3: Pitfalls'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ flexFlow: 'column' }}>
                        <ListItemButton sx={{ width: 'stretch' }} onClick={() => handleDropdownClick3(index)}>
                            <ListItemText
                                primary={text}
                                primaryTypographyProps={{ fontWeight: 600 }}
                            />
                            {openDropdowns3[index] ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse sx={{ width: 'stretch' }} in={openDropdowns3[index]} unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4, width: '100%' }} to="/cs6460-ai-course/#/module-3-lesson-1">
                                <ListItemText primary="Lesson 3.1A: Ethical Pitfalls Part 1" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4, width: 'stretch' }} to="/cs6460-ai-course/#/module-3-lesson-2">
                                <ListItemText primary="Lesson 3.1B: Ethical Pitfalls Part 2" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4, width: 'stretch' }} to="/cs6460-ai-course/#/module-3-lesson-3">
                                <ListItemText primary="Lesson 3.2: Emotional Pitfalls" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4, width: 'stretch' }} to="/cs6460-ai-course/#/module-3-lesson-4">
                                <ListItemText primary="Lesson 3.3: Cognitive Pitfalls" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </ListItem>
                ))}
                {['Module 4: Solutions'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ flexFlow: 'column' }}>
                        <ListItemButton sx={{ width: 'stretch' }} onClick={() => handleDropdownClick4(index)}>
                            <ListItemText
                                primary={text}
                                primaryTypographyProps={{ fontWeight: 600 }}
                            />
                            {openDropdowns4[index] ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse sx={{ width: 'stretch' }} in={openDropdowns4[index]} unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4, width: '100%' }} to="/cs6460-ai-course/#/module-4-lesson-1">
                                <ListItemText primary="Lesson 4.1: Research Solutions" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4, width: 'stretch' }} to="/cs6460-ai-course/#/module-4-lesson-2">
                                <ListItemText primary="Lesson 4.2: Infrastructural Solutions" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4, width: 'stretch' }} to="/cs6460-ai-course/#/module-4-lesson-3">
                                <ListItemText primary="Lesson 4.3: Independent Solutions" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </ListItem>
                ))}
                </List>
            </Drawer>
            </Box>
    );
}

export default SideBar;