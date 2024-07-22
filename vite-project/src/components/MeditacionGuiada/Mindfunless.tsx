import { Box, Typography, Grid } from '@mui/material';
import muestra from '../IMG/5.png';
import ReactPlayer from 'react-player';
import Video1 from '../Audio/Mindfulness 5 Minutos.mp3'
import paz from '../Audio/Meditación guiada MINDFULNESS ✨ 5 minutos de PAZ MENTAL.mp3'
import tranquila from '../Audio/Meditación guiada MENTE TRANQUILA 🤍🌀 para Mente Hiperactiva - 5 minutos MINDFULNESS.mp3'
import ansiedad from '../Audio/Meditación guiada para calmar la ANSIEDAD - 5 minutos Minfulness.mp3'

const tarjetas = [
  {
    titulo: 'Meditación mindfunless' ,
    audio: Video1,
    imagen: muestra // URL de ejemplo
  },
  {
    titulo: 'Meditación mindfunless paz mental',
    audio: paz,
    imagen: 'https://via.placeholder.com/150x300' // URL de ejemplo
  },
  {
    titulo: 'Meditación mindfunless mente tranquila',
    audio: tranquila, 
  },
  {
    titulo: 'Meditación mindfunless para calmar la ansiedad ',
    audio: ansiedad,
    imagen: 'https://via.placeholder.com/150x300' // URL de ejemplo
  },
];

const Mindfunless = () => {
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

export default Mindfunless;




