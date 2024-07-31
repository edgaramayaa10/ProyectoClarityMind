import { Box, Typography, Grid, Chip } from '@mui/material';
import ReactPlayer from 'react-player';
import Autoestima from '../Audio/Inicia tu día con AFIRMACIONES para Autoestima y Seguridad en ti 💛 - 5 minutos.mp3';
import ReducionEstres from '../Audio/Meditación Guiada Afirmaciones para Reducir Estrés y Encontrar Paz 🧘_♀️✨.mp3';
import Dormir from '../Audio/💤 Haz Esto 5 Minutos Antes de Dormir _ Afirmaciones Positivas _ Meditación de Wayne Dyer.mp3';
import Chakras from '../Audio/❤️Meditación CORTA para ACTIVAR los 7 CHAKRAS ✨ con Afirmaciones Poderosas_ Meditacion Express.mp3';
import AfirAutoes from '../MeditacionGuiada/IMG/MediAfirma/autoestima.png';
import reducirEstres from '../MeditacionGuiada/IMG/MediAfirma/reduccionEstres.jpg';
import AfirDormir from '../MeditacionGuiada/IMG/MediAfirma/dormirPositivo.png';
import SieteChakras from '../MeditacionGuiada/IMG/MediAfirma/los7chakras.jpg';

const tarjetas = [
  {
    titulo: 'Meditación de afirmaciones para buena autoestima',
    audio: Autoestima,
    imagen: AfirAutoes // URL de ejemplo
  },
  {
    titulo: 'Meditación afirmaciones para reducir estrés',
    audio: ReducionEstres,
    imagen: reducirEstres// URL de ejemplo
  },
  {
    titulo: 'Meditación afirmaciones antes de dormir',
    audio: Dormir,
    imagen: AfirDormir
  },
  {
    titulo: 'Meditación activa los 7 chakras',
    audio: Chakras,
    imagen: SieteChakras // URL de ejemplo
  },
];

const Afirmaciones = () => {
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

export default Afirmaciones;
