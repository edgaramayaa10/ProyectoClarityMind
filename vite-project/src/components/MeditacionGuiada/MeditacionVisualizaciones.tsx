import { Box, Typography, Grid, Chip } from '@mui/material';
import ReactPlayer from 'react-player';
import Video1 from '../Audio/MEDITACIÓN CORTA _ VISUALIZACIÓN RELAJANTE _ MEDITACIÓN 10 MINUTOS ❤ EASY ZEN.mp3';
import Video2 from '../Audio/Visualización Guiada para Manifestar 🌈 👁 _ Ley de la Atracción y Manifestación.mp3';
import Video3 from '../Audio/VISUALIZACIÓN  EL BOSQUE . MEDITACIÓN PARA LA ANSIEDAD Y EL AGOBIO. RELAJACIÓN DE CUERPO Y MENTE ☼.mp3';
import Video4 from '../Audio/Meditación para Visualizar tus Objetivos Cumplidos _ Campo Cuántico _ Ley de la Atracción.mp3';
import VisRelajante from '../MeditacionGuiada/IMG/MediVisuali/visualizacionRelajante.jpg';
import Manifestar from '../MeditacionGuiada/IMG/MediVisuali/imagenManifestar.jpg';
import AnsiedadAgobio from '../MeditacionGuiada/IMG/MediVisuali/imagenAnsiedadEstres.png';
import Objetivos from '../MeditacionGuiada/IMG/MediVisuali/objetivosCumplidos.png';

const tarjetas = [
  {
    titulo: 'Meditación con visualizaciones relajante',
    audio: Video1,
    imagen: VisRelajante // URL de ejemplo
  },
  {
    titulo: 'Meditación con visualizaciones manifestar',
    audio: Video2,
    imagen: Manifestar // URL de ejemplo
  },
  {
    titulo: 'Meditación con visualizaciones para ansiedad y agobio',
    audio: Video3,
    imagen: AnsiedadAgobio

  },
  {
    titulo: 'Meditación con visualizaciones para objetivos cumplidos',
    audio: Video4,
    imagen: Objetivos // URL de ejemplo
  },
];

const MeditacionVisualizaciones = () => {
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

export default MeditacionVisualizaciones;
