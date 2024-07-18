import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const BodyComponent = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Box sx={{ bgcolor: '#FBF5E8', height: '110vh', marginTop: '-5px', padding: '16px' }}>
                <Typography variant="h4" component="h6" gutterBottom sx={{ color:'#D49F11', fontSize: '20px', textAlign: 'center', fontFamily: 'monospace', marginBottom: '20px' }}>
                    NUESTRA MISIÓN 
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', color: '#045346', fontFamily:'monospace', fontSize:'25px', marginTop:'20px', marginBottom: '20px' }}>
                    DAROS CONOCIMIENTOS Y RECURSOS QUE NECESITAIS PARA TENER MÁS FUERTE VUESTRA SALUD MENTAL. 
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', color: '#045346', fontFamily:'monospace', fontSize:'20px', marginTop:'20px', marginBottom: '20px' }}>
                    OS DEJAMOS UNOS CONSEJOS PARA PERSONAS QUE QUIEREN INICIARSE EN LA MEDITACIÓN. 
                </Typography>
                <Grid container spacing={2} sx={{ marginTop: '40px' }}>
                    <Grid item xs={4}>
                        <Paper elevation={3} sx={{ padding: '16px', height: '200px', bgcolor: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant="h6" component="div" sx={{ marginBottom: '8px', fontWeight: 'bolder', fontFamily: 'monospace', fontSize: '18px' }}>
                                ACTIVIDAD FIJA
                            </Typography>
                            <Typography variant="body1" sx={{ textAlign: 'center', fontSize: '14px' }}>
                                Intenta al principio que sea siempre a la misma franja horaria, y no cada día a una hora diferente, fíjate un espacio de tiempo diario que tengas claro que puedes.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper elevation={3} sx={{ padding: '16px', height: '200px', bgcolor: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant="h6" component="div" sx={{ marginBottom: '8px', fontWeight: 'bolder', fontFamily: 'monospace', fontSize: '18px' }}>
                                EMPIEZA POCO A POCO
                            </Typography>
                            <Typography variant="body1" sx={{ textAlign: 'center', fontSize: '14px' }}>
                                Tienes que ser regular, empieza con poco tiempo y lo vas incrementando poco a poco, no cambies de tiempo según tu disponibilidad.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper elevation={3} sx={{ padding: '16px', height: '200px', bgcolor: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant="h6" component="div" sx={{ marginBottom: '8px', fontWeight: 'bolder', fontFamily: 'monospace', fontSize: '18px' }}>
                                UN LUGAR TRANQUILO
                            </Typography>
                            <Typography variant="body1" sx={{ textAlign: 'center', fontSize: '14px' }}>
                                Acomoda en tu casa un espacio tranquilo y que transmita paz, y si no puedes dedicar un espacio determinado, deja todo preparado para que sea fácil de entrar.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ marginTop: '40px' }} justifyContent="center">
                    <Grid item xs={5}>
                        <Paper elevation={3} sx={{ padding: '16px', height: '200px', bgcolor: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant="h6" component="div" sx={{ marginBottom: '8px', fontWeight: 'bolder', fontFamily: 'monospace', fontSize: '18px' }}>
                                MANTENER LA MISMA MEDITACIÓN
                            </Typography>
                            <Typography variant="body1" sx={{ textAlign: 'center', fontSize: '14px' }}>
                                Intenta mantener la misma meditación por lo menos una semana, si se da el caso que no te gusta, busca la que sí lo haga, y mantenla 21 días.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={5}>
                        <Paper elevation={3} sx={{ padding: '16px', height: '200px', bgcolor: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant="h6" component="div" sx={{ marginBottom: '8px', fontWeight: 'bolder', fontFamily: 'monospace', fontSize: '18px' }}>
                                NO FIJARSE OBJETIVOS
                            </Typography>
                            <Typography variant="body1" sx={{ textAlign: 'center', fontSize: '14px' }}>
                                La meditación es el arte para estar en el presente, no se trata de sentirse relajado en una nube, no tienes que tener un calendario fijo para conseguir la paz interior.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
}

export default BodyComponent;
