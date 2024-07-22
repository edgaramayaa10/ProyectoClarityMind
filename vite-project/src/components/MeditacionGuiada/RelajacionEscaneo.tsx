import { Box, Typography, Grid } from '@mui/material';
import muestra from '../IMG/5.png';
import ReactPlayer from 'react-player';
import Escaner from '../Audio/Meditación Escaner Corporal Tumbado, Escaneo Corporal 5 Minutos.mp3'
import BodyScan from '../Audio/Meditación Guiada del escáner corporal o Body scan (corto).mp3'
import Relajacion from '../Audio/Meditación guiada con Escaneo Corporal _ 14 minutos de relajación Gabriela Litschi.mp3'
import niños from '../Audio/RELAJACIÓN PARA NIÑOS _ Escáner corporal.mp3'
const tarjetas = [
  {
    titulo: 'Meditación escaner corporal tumbado',
    audio: Escaner,
    imagen: muestra // URL de ejemplo
  },
  {
    titulo: 'Meditación BodyScan',
    audio: BodyScan,
    imagen: 'https://via.placeholder.com/150x300' // URL de ejemplo
  },
  {
    titulo: 'Meditación escaneo corporal para la relajacion',
    audio: Relajacion, 
  },
  {
    titulo: 'Meditación relajacion para niños ',
    audio: niños,
    imagen: 'https://via.placeholder.com/150x300' // URL de ejemplo
  },
];

const RelajacionEscaneo = () => {
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

export default RelajacionEscaneo;

