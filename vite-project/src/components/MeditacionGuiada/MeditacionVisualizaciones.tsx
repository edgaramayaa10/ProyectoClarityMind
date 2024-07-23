import { Box, Typography, Grid } from '@mui/material';
import muestra from '../IMG/5.png';
import ReactPlayer from 'react-player';
import Video1 from '../Audio/MEDITACIÓN CORTA _ VISUALIZACIÓN RELAJANTE _ MEDITACIÓN 10 MINUTOS ❤ EASY ZEN.mp3'
import Video2 from '../Audio/Visualización Guiada para Manifestar 🌈 👁 _ Ley de la Atracción y Manifestación.mp3'
import Video3 from '../Audio/VISUALIZACIÓN  EL BOSQUE . MEDITACIÓN PARA LA ANSIEDAD Y EL AGOBIO. RELAJACIÓN DE CUERPO Y MENTE ☼.mp3'
import Video4 from '../Audio/Meditación para Visualizar tus Objetivos Cumplidos _ Campo Cuántico _ Ley de la Atracción.mp3'
const tarjetas = [
  {
    titulo: 'Meditación con visualizaciones relajante',
    audio: Video1,
    imagen: muestra // URL de ejemplo
  },
  {
    titulo: 'Meditación con visualizaciones manifestar',
    audio: Video2,
    imagen: 'https://via.placeholder.com/150x300' // URL de ejemplo
  },
  {
    titulo: 'Meditación con visualizaciones para ansiedad y agobio',
    audio: Video3, 
  },
  {
    titulo: 'Meditación con visualizaciones para objetivos cumplidos',
    audio: Video4,
    imagen: 'https://via.placeholder.com/150x300' // URL de ejemplo
  },
];

const MeditacionVisualizaciones = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2, marginTop: '100px' }}>
      <Grid container spacing={3} direction="column">
        {tarjetas.map((tarjeta, index) => (
          <Grid item key={index}>
            <Box sx={{ display: 'flex', alignItems: 'center', border: '2px solid #DAA97D', borderRadius: '8px', overflow: 'hidden' }}>
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

export default MeditacionVisualizaciones;
