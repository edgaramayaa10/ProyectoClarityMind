import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 300;

const MeditacionGuiada = () => {
    const [content, setContent] = useState("Welcome! Click on a meditation type to see more details.");

    const handleButtonClick = (text: string) => {
        setContent(text);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${20}px)`, ml: `${20}px`, marginTop: '100px' }}
            >
            </AppBar>
            <Drawer
                sx={{
                    width: 0,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        marginTop: '100px'
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <List>
                    {[
                        { label: 'Meditaciones Tradicionales', content: 'HOLA MUNDO' },
                        { label: 'Meditacion con visualizaciones', content: 'Content for Meditacion con visualizaciones' },
                        { label: 'Relajacion y escaneo corporal', content: 'Content for Relajacion y escaneo corporal' },
                        { label: 'Tonos Binaurales', content: 'Content for Tonos Binaurales' },
                        { label: 'Afirmaciones', content: 'Content for Afirmaciones' },
                        { label: 'Meditacion guiada de atencion a la respiracion', content: 'Content for Meditacion guiada de atencion a la respiracion' },
                        { label: 'Mindfunless', content: 'Content for Mindfunless' },
                        { label: 'Meditacion para dormir mejor', content: 'Content for Meditacion para dormir mejor' }
                    ].map((item) => (
                        <ListItem key={item.label} disablePadding>
                            <ListItemButton onClick={() => handleButtonClick(item.content)}>
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, marginLeft: `${drawerWidth + 20}px` }}
            >
                <Typography paragraph>
                    {content}
                </Typography>
            </Box>
        </Box>
    );
}

export default MeditacionGuiada;
