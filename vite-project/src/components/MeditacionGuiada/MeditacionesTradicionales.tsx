// MeditacionesTradicionales.tsx
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';


const MeditacionesTradicionales = () => {
  return (
    <Box sx={{textAlign: 'center', marginTop:'100px'}}>
      <Typography variant="h5">Meditaciones Tradicionales</Typography>
      <Typography paragraph>
      Se dan las instrucciones de forma oral, guiando a quien está escuchando para introducirlo en  un estado meditativo. <br />Suelen darse muchas pausas de sielncio, y no es frecuente acompañarlas con música. <br /> La gente suele recurrir a este tipo de meditación para iniciar o para mantener el estado de calma.
      </Typography>

    </Box>

    
  );
};

export default MeditacionesTradicionales;
