// MeditacionesTradicionales.tsx
import { AddBox } from '@mui/icons-material';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const MeditacionRespiracion = () => {
  return (
    <Box sx={{marginTop:'100px'}}>
      <Typography variant="h5">Meditacion guiada de atencion a la respiracion</Typography>
      <Typography paragraph>
        La premisa de este tipo de meditación es que si se logra controlar algo tan simple como la respiración, se puede entrenar la mente en casi cualquier aspecto.
      </Typography>
    </Box>
  );
};

export default MeditacionRespiracion;
