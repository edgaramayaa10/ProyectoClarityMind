import { Box, Typography, Grid } from '@mui/material';
import muestra from '../IMG/5.png';
import ReactPlayer from 'react-player';
import Respiracion from '../Audio/Mindfulness meditación guiada corta de 3 minutos - Atención a la respiración.mp3'
import Profundo from '../Audio/Meditación Guiada_ Técnica de Respiración Profunda.mp3'
import Consciente from '../Audio/Sencillo ejercicio de RESPIRACIÓN CONSCIENTE. (5 minutos).mp3'
import calmar from '../Audio/Meditación para calmar tu mente. Atención a la respiración en 7 minutos (1).mp3'
const tarjetas = [
  {
    titulo: 'Meditación atencion a la respiracion' ,
    audio: Respiracion,
    imagen: muestra // URL de ejemplo
  },
  {
    titulo: 'Meditación respiracion profunda',
    audio: Profundo,
    imagen: 'https://via.placeholder.com/150x300' // URL de ejemplo
  },
  {
    titulo: 'Meditación respiracion consciente',
    audio: Consciente, 
  },
  {
    titulo: 'Meditación respiracion para calmar tu mente ',
    audio: calmar,
    imagen: 'https://via.placeholder.com/150x300' // URL de ejemplo
  },
];

const MeditacionRespiracion = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2, marginTop: '100px' }}>
      <Grid container spacing={3} direction="column">
        {tarjetas.map((tarjeta, index) => (
          <Grid item key={index}>
            <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
              {/* Imagen a la izquierda */}
              <Box 
                sx={{ 
                  width: 150, // Ancho de la imagen
                  height: 150, // Altura fija
                  backgroundImage: `url(${tarjeta.imagen})`,
                  backgroundSize: 'cover', // Asegura que la imagen cubra el área
                  backgroundPosition: 'center',
                }} 
              />
              {/* Contenido de la tarjeta */}
              <Box sx={{ flex: 1, padding: 2 }}>
                <Typography variant="h5" component="div">
                  {tarjeta.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  
                </Typography>
                {ReactPlayer.canPlay(tarjeta.audio) ? (
                  <ReactPlayer url={tarjeta.audio} controls width="100%" height="50px" />
                ) : (
                  <audio controls>
                    <source src={tarjeta.audio} type="audio/mpeg" />
                    Tu navegador no soporta el elemento de audio.
                  </audio>
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MeditacionRespiracion;



