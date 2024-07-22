import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import muestra from '../IMG/5.png';


const tarjetas = [
  {
    titulo: 'Ondas Delta',
    descripcion: '(1 – 3 Hz): relacionadas con estados de hipnosis o sueño muy profundo.',
    imagen: 'https://via.placeholder.com/150x300' // URL de ejemplo
  },
  {
    titulo: 'Ondas Teta',
    descripcion: '(3,1 – 7,9 Hz): Estado somnolencia. Relacionadas también con la imaginación.',
    imagen: 'https://via.placeholder.com/150x300' // URL de ejemplo
  },
  {
    titulo: 'Ondas Alfa',
    descripcion: '(8 a 13 Hz): Ondas que surgen cuando se está relajado pero despierto, donde se mueven la creatividad y el subconsciente.',
    imagen: 'https://via.placeholder.com/150x300' // URL de ejemplo
  },
  {
    titulo: 'Ondas Beta',
    descripcion: '(14 – 29 Hz): Estados de alerta, con una actividad neuronal intensa.',
    imagen: 'https://via.placeholder.com/150x300' // URL de ejemplo
  },
  {
    titulo: 'Ondas Gamma',
    descripcion: '(30 – 100 Hz): No se sabe mucho aún acerca de estos impulsos.',
    imagen: muestra, // URL de ejemplo
  }
];

const MeditacionDormir = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2, marginTop: '100px' }}>
      <Grid container spacing={3} direction="column">
        {tarjetas.map((tarjeta, index) => (
          <Grid item key={index}>
            <Card sx={{ display: 'flex' }}>
              {/* Imagen a la izquierda */}
              <Box 
                sx={{ 
                  width: 150, // Ancho de la imagen
                  height: '100%', // Ocupa todo el alto de la tarjeta
                  backgroundImage: `url(${tarjeta.imagen})`,
                  backgroundSize: 'cover', // Asegura que la imagen cubra el área
                  backgroundPosition: 'center',
                }} 
              />
              {/* Contenido de la tarjeta */}
              <CardContent sx={{ flex: 1 }}>
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
