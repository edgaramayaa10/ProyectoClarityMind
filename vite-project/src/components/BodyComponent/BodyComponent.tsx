import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const BodyComponent = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Box sx={{ bgcolor: '#FBF5E8', height: '100vh', marginTop: '-5px', padding: '16px' }}>
                <Typography variant="h4" component="h6" gutterBottom sx={{color:'#D49F11', fontSize: '20px', textAlign: 'center', fontFamily: 'monospace'}}>
                    Nuestra missión 
                </Typography>
                <Typography variant="body1" sx={{textAlign: 'center', color: '#045346', fontFamily:'monospace', fontSize:'35px', marginTop:'30px'}}>
                    Daros conocimientos y recursos que necesitais para tener mas fuerte vuestra salud mental. 
                </Typography>
            </Box>
        </React.Fragment>
    );
}

export default BodyComponent;
