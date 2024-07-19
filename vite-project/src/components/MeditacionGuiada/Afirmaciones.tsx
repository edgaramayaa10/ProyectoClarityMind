// MeditacionesTradicionales.tsx
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const Afirmaciones = () => {
  return (
    <Box sx={{marginTop:'100px'}}>
      <Typography variant="h5">Afirmaciones</Typography>
      <Typography paragraph>
        En vez de pensar en negativo, este tipo de meditación ayuda a reformular estos pensamientos en un formato más optimista.
      </Typography>
    </Box>
  );
};

export default Afirmaciones;
