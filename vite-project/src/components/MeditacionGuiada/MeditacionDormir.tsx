// MeditacionesTradicionales.tsx
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const MeditacionDormir = () => {
  return (
    <Box sx={{marginTop:'100px'}}>
      <Typography variant="h5">Meditcion para dormir mejor</Typography>
      <Typography paragraph>
        Son de las mas recurridas, sobre todo por el hecho de vivir en una sociedad en la que los horario snos impiden tener unos adecuados hábitos de sueño. <br /> Ofrece una serie de instrucciones que ayudan a alcanzar el sueño de una forma natural y no forzada.
      </Typography>
    </Box>
  );
};

export default MeditacionDormir;
