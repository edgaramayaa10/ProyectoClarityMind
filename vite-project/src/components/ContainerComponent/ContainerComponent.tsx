import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import './ContainerComponent.css'

const ContainerComponent = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={'xl'}>
        <Box sx={{ bgcolor: '#FBF7F0', color:'#045346', height: '400px', p: 2 }}>
        <Typography className='title' sx={{fontWeight: 'bold', textAlign:'center', fontFamily:'monospace'}} variant='h5'>¿QUE ES LA MEDITACIÓN?</Typography>
        <Typography className='body' variant='body1' sx={{color: 'black'}}>Estas estresado y no sabes como solucionarlo?</Typography>
        
        
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default ContainerComponent;