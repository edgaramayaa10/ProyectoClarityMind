import { Box, Typography, Grid } from '@mui/material';
import picDelta from './IMG/delta.png';
import picTheta from './IMG/theta.png';
import picAlpha from './IMG/alpha.png';
import picBeta from './IMG/beta.png';
import picGamma from './IMG/gamma.png';
import ReactPlayer from 'react-player';
import OndasAlfa from '../Audio/Meditación de 5 minutos con música binaural con Ondas Alfa _ Calma y paz interior _ Med Soul (1).mp3';
import Theta from '../Audio/Theta Healing. Conexión a la Onda Theta. Meditación al 7º plano..mp3';
import Delta from '../Audio/💤💜 MEDITACIÓN GUIADA PARA DORMIR PROFUNDAMENTE  _ RELAJACIÓN PROFUNDA _ ONDAS THETA Y DELTA.mp3';
import Gamma from '../Audio/Caleidoscopio de ondas gamma de 40 Hz de frecuencia produce concentración, calma y felicidad.mp3';
import Beta from '../Audio/Ondas beta 33 Hz, Audio binaural, Ondas cerebrales, __ La meditación consciente.mp3';

const tarjetas = [
  {
    titulo: 'Ondas Delta',
    descripcion: '(1 – 3 Hz): relacionadas con estados de hipnosis o sueño muy profundo.',
    audio: Delta,
    imagen: picDelta // URL de ejemplo
  },
  {
    titulo: 'Ondas Teta',
    descripcion: '(3,1 – 7,9 Hz): Estado somnolencia. Relacionadas también con la imaginación.',
    audio: Theta,
    imagen: picTheta // URL de ejemplo
  },
  {
    titulo: 'Ondas Alfa',
    descripcion: '(8 a 13 Hz): Ondas que surgen cuando se está relajado pero despierto, donde se mueven la creatividad y el subconsciente.',
    audio: OndasAlfa,
    imagen: picAlpha
  },
  {
    titulo: 'Ondas Beta',
    descripcion: '(14 – 29 Hz): Estados de alerta, con una actividad neuronal intensa.',
    audio: Beta,
    imagen: picBeta // URL de ejemplo
  },
  {
    titulo: 'Ondas Gamma',
    descripcion: '(30 – 100 Hz): No se sabe mucho aún acerca de estos impulsos.',
    audio: Gamma,
    imagen: picGamma // URL de ejemplo
  }
];

const TonosBinaurales = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2, marginTop: '100px' }}>
      <Grid container spacing={4} direction="column">
        {tarjetas.map((tarjeta, index) => (
          <Grid item key={index}>
            <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', minHeight: '200px' }}>
              {/* Imagen a la izquierda */}
              <Box 
                sx={{ 
                  width: 200, // Ancho de la imagen
                  height: 200, // Altura fija aumentada
                  backgroundImage: `url(${tarjeta.imagen})`,
                  backgroundSize: 'cover', // Asegura que la imagen cubra el área
                  backgroundPosition: 'center',
                }} 
              />
              {/* Contenido de la tarjeta */}
              <Box sx={{ flex: 1, paddingTop: '4px', paddingBottom: '4px', paddingLeft: '16px', paddingRight: '16px' }}>
                <Typography variant="h5" component="div" sx={{ marginBottom: 1 }}>
                  {tarjeta.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
                  {tarjeta.descripcion}
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

export default TonosBinaurales;
