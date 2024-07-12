import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const MeditacionGuiada = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Box sx={{ bgcolor: 'white', color: '#045346', height: '370px', p: 2 }}>
            <Typography sx={{ fontWeight: 'bold', textAlign: 'center', fontFamily: 'monospace', fontSize: '35px', margin: '20px 0' }} variant='h5'>Meditación Guiada</Typography>
                <Typography sx={{ color: 'black', textAlign: 'center', fontFamily: 'monospace', fontSize: '20px', marginBottom: '20px' }} variant='h6'>Es una herramienta que permite, mediante palabras e imágenes, dejar de lado emociones negativas como el dolor, el estrés y las preocupaciones del día a día, ayudándonos a conectar con nuestro interior.</Typography>
                <Grid container spacing={2} justifyContent="center" marginTop={5}>
                    <Grid item xs={6} sm={3}>
                    <Link to='/meditacion/meditacionTradicional'><Button variant="outlined" fullWidth sx={{ height: '100%', width: '100%', color:'#045346','&:hover':{borderColor:'#1A4D2E'}, borderColor:'#045346' }} className="custom-button">Meditaciones tradicionales</Button></Link> 
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Link to='/meditacion/meditacionVisualizaciones'><Button variant="outlined" fullWidth sx={{ height: '100%', width: '100%', color:'#045346','&:hover':{borderColor:'#1A4D2E'}, borderColor:'#045346' }} className="custom-button">Meditación con visualizaciones</Button></Link> 
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Link to='/meditacion/meditacionRelajacion'><Button variant="outlined" fullWidth sx={{ height: '100%', width: '100%', color:'#045346','&:hover':{borderColor:'#1A4D2E'}, borderColor:'#045346' }} className="custom-button">Relajación y escaneo corporal</Button></Link> 
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Link to='/meditacion/meditacionBinaurales'><Button variant="outlined" fullWidth sx={{ height: '100%', width: '100%', color:'#045346','&:hover':{borderColor:'#1A4D2E'}, borderColor:'#045346' }} className="custom-button">Tonos binaurales</Button></Link> 
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Link to='/meditacion/meditacionAfirmaciones'><Button variant="outlined" fullWidth sx={{ height: '100%', width: '100%', color:'#045346','&:hover':{borderColor:'#1A4D2E'}, borderColor:'#045346' }} className="custom-button">Afirmaciones</Button></Link> 
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Link to='/meditacion/meditacionRespiracion'><Button variant="outlined" fullWidth sx={{ height: '100%', width: '100%', color:'#045346','&:hover':{borderColor:'#1A4D2E'}, borderColor:'#045346' }} className="custom-button">Meditación guiada de atención a la respiración</Button></Link> 
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Link to='/meditacion/meditacionMindfunless'><Button variant="outlined" fullWidth sx={{ height: '100%', width: '100%', color:'#045346','&:hover':{borderColor:'#1A4D2E'}, borderColor:'#045346' }} className="custom-button">Mindfulness</Button></Link> 
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Link to='/meditacion/meditacionDormir'><Button variant="outlined" fullWidth sx={{ height: '100%', width: '100%', color:'#045346','&:hover':{borderColor:'#1A4D2E'}, borderColor:'#045346' }} className="custom-button">Meditaciones guiadas para dormir mejor</Button></Link> 
                    </Grid>
                </Grid>
                </Box>

        </React.Fragment>

    );
}
export default MeditacionGuiada;

