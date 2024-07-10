import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './ContainerComponent.css'

const ContainerComponent = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: '#E4C59E', height: '400px', width: '100%' }}/>
      </Container>
    </React.Fragment>
  );
}

export default ContainerComponent;