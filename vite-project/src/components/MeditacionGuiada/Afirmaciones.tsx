import { Box, Typography, Grid } from '@mui/material';
import muestra from '../IMG/5.png';
import ReactPlayer from 'react-player';
import Autoestima from '../Audio/Inicia tu día con AFIRMACIONES para Autoestima y Seguridad en ti 💛 - 5 minutos.mp3'
import ReducionEstres from '../Audio/Meditación Guiada Afirmaciones para Reducir Estrés y Encontrar Paz 🧘_♀️✨.mp3'
import Dormir from '../Audio/💤 Haz Esto 5 Minutos Antes de Dormir _ Afirmaciones Positivas _ Meditación de Wayne Dyer.mp3'
import Chakras from '../Audio/❤️Meditación CORTA para ACTIVAR los 7 CHAKRAS ✨ con Afirmaciones Poderosas_ Meditacion Express.mp3'

const tarjetas = [
  {
    titulo: 'Meditación de afirmaciones para buena autoestima' ,
    audio: Autoestima,
    imagen: muestra // URL de ejemplo
    
  },
  {
    titulo: 'Meditación afirmaciones para reducir estres',
    audio: ReducionEstres,
    imagen: 'https://via.placeholder.com/150x300' // URL de ejemplo
  },
  {
    titulo: 'Meditación afirmaciones antes de dormir',
    audio: Dormir, 
  },
  {
    titulo: 'Meditación activa los 7 chakras ',
    audio: Chakras,
    imagen: 'https://via.placeholder.com/150x300' // URL de ejemplo
  },
];

const Afirmaciones = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2, marginTop: '100px' }}>
      <Grid container spacing={3} direction="column">
        {tarjetas.map((tarjeta, index) => (
          <Grid item key={index}>
            <Box sx={{ display: 'flex', alignItems: 'center', border: '2px solid #045346', borderRadius: '8px', overflow: 'hidden' }}>
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

export default Afirmaciones;


