import { Box, Typography, Grid, Chip } from '@mui/material';
import ReactPlayer from 'react-player';
import profundo from '../Audio/Meditación Guiada para Dormir y Descansar Profundamente 🌙_ MEDITACIÓN CORTA PARA RUTINA DE NOCHE.mp3';
import estres from '../Audio/Meditación para DORMIR ✨ Libera Estrés - 10 minutos MINDFULNESS.mp3';
import rapido from '../Audio/Meditación Guiada para DORMIR en 5 MINUTOS... ¡Muy Útil! (1).mp3';
import reparador from '../Audio/Meditación guiada para dormir _ Sueño profundo y reparador en solo unos minutos.mp3';
import SuenoProfundo from '../MeditacionGuiada/IMG/MediDormir/dormirSueñoProfundo.png';
import SuenoLiberarEstres from '../MeditacionGuiada/IMG/MediDormir/dormirLiberarEstres.jpg';
import SuenoRapido from '../MeditacionGuiada/IMG/MediDormir/dormirRapido.png';
import SuenoReparador from '../MeditacionGuiada/IMG/MediDormir/dormirSueñoReparador.jpg';

const tarjetas = [
  {
    titulo: 'Meditación para dormir y descansar',
    audio: profundo,
    imagen: SuenoProfundo // URL de ejemplo
  },
  {
    titulo: 'Meditación para dormir y liberar estrés',
    audio: estres,
    imagen:  SuenoLiberarEstres// URL de ejemplo
  },
  {
    titulo: 'Meditación para dormirte rápido',
    audio: rapido,
    imagen: SuenoRapido
  },
  {
    titulo: 'Meditación para un sueño reparador',
    audio: reparador,
    imagen: SuenoReparador// URL de ejemplo
  },
];

const DormirMejor = () => {
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
                  height: 162, // Altura fija
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
                  {/* Texto adicional si es necesario */}
                </Typography>
                {ReactPlayer.canPlay(tarjeta.audio) ? (
                  <ReactPlayer url={tarjeta.audio} controls width="100%" height="50px" />
                ) : (
                  <audio controls>
                    <source src={tarjeta.audio} type="audio/mpeg" />
                    Tu navegador no soporta el elemento de audio.
                  </audio>
                )}
                <Box sx={{ marginTop: 2 }}>
                  <Chip label={tarjeta.titulo} />
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DormirMejor;
