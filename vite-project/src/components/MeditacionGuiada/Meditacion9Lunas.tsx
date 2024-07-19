import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

const tarjetas = [
  { titulo: 'Ejemplo 1', descripcion: 'Descripción del Ejemplo 1' },
  { titulo: 'Ejemplo 2', descripcion: 'Descripción del Ejemplo 2' },
  { titulo: 'Ejemplo 3', descripcion: 'Descripción del Ejemplo 3' }
];

const MeditacionDormir = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={3}>
        {tarjetas.map((tarjeta, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {tarjeta.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {tarjeta.descripcion}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MeditacionDormir;
