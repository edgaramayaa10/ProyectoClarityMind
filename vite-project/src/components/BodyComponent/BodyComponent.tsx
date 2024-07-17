import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const BodyComponent = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Box sx={{ bgcolor: '#FBF5E8', height: '100vh', marginTop: '-5px', padding: '16px' }}>
                <Typography variant="h4" component="h6" gutterBottom sx={{color:'#D49F11', fontSize: '20px', textAlign: 'center', fontFamily: 'monospace'}}>
                    Nuestra misión 
                </Typography>
                <Typography variant="body1" sx={{textAlign: 'center', color: '#045346', fontFamily:'monospace', fontSize:'35px', marginTop:'30px'}}>
                    Daros conocimientos y recursos que necesitáis para tener más fuerte vuestra salud mental. 
                </Typography>
                <Typography variant="body1" sx={{textAlign: 'center', color: '#045346', fontFamily:'monospace', fontSize:'35px', marginTop:'30px'}}>
                    Os dejamos unos consejos para principiantes. 
                </Typography>
                <Grid container spacing={2} sx={{ marginTop: '40px' }}>
                    <Grid item xs={4}>
                        <Paper elevation={3} sx={{ padding: '16px', textAlign: 'center', height: '250px', bgcolor: '#FFF' }}>
                            <Typography variant="h6" component="div" sx={{marginBottom: '8px'}}>
                                Título 1
                            </Typography>
                            <Typography variant="body1">
                                Este es el contenido del primer contenedor. Aquí puedes poner una descripción o información relevante.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper elevation={3} sx={{ padding: '16px', textAlign: 'center', height: '250px', bgcolor: '#FFF' }}>
                            <Typography variant="h6" component="div" sx={{marginBottom: '8px'}}>
                                Título 2
                            </Typography>
                            <Typography variant="body1">
                                Este es el contenido del segundo contenedor. Aquí puedes poner una descripción o información relevante.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper elevation={3} sx={{ padding: '16px', textAlign: 'center', height: '250px', bgcolor: '#FFF' }}>
                            <Typography variant="h6" component="div" sx={{marginBottom: '8px'}}>
                                Título 3
                            </Typography>
                            <Typography variant="body1">
                                Este es el contenido del tercer contenedor. Aquí puedes poner una descripción o información relevante.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
}

export default BodyComponent;
