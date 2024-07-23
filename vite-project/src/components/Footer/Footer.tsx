import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

const Footer = () => {
    const [rating, setRating] = useState<number | null>(null);

    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: '#A9B388',
                color: '#5F6F52',
                bottom: 0,
                width: '100%',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="inherit" gutterBottom sx={{ color: '#1A5319' }}>
                            Meditación Guiada
                        </Typography>
                        <Typography variant="body2" color="inherit" sx={{ color: '#1A5319' }}>
                            Encuentra paz y bienestar con nuestras meditaciones guiadas.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="inherit" gutterBottom sx={{ color: '#1A5319' }}>
                            Enlaces
                        </Typography>
                        <Link href="#" variant="body2" display="block" sx={{ color: '#1A5319' }}>
                            Política de Privacidad
                        </Link>
                        <Link href="#" variant="body2" display="block" sx={{ color: '#1A5319' }}>
                            Términos de Servicio
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="inherit" gutterBottom sx={{ color: '#1A5319' }}>
                            Contacto
                        </Typography>
                        <Typography variant="body2" color="inherit" sx={{ color: '#1A5319' }}>
                            Email: claritymind.mind@gmail.com
                        </Typography>
                        <Typography variant="body2" color="inherit" sx={{ color: '#1A5319' }}>
                            Teléfono: +34 123 456 789
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="inherit" gutterBottom sx={{ color: '#1A5319' }}>
                            Síguenos
                        </Typography>
                        <IconButton color="inherit" href="https://facebook.com">
                            <FacebookIcon sx={{ color: '#1A5319' }} />
                        </IconButton>
                        <IconButton color="inherit" href="https://twitter.com">
                            <TwitterIcon sx={{ color: '#1A5319' }} />
                        </IconButton>
                        <IconButton color="inherit" href="https://instagram.com">
                            <InstagramIcon sx={{ color: '#1A5319' }} />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container spacing={4} sx={{ mt: 4 }}>
                    <Grid item xs={12}>
                        <Typography variant="h6" color="inherit" gutterBottom sx={{ color: '#1A5319' }}>
                            Valoración
                        </Typography>
                        <Rating
                            name="rating"
                            value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                        />
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" color="inherit" align="center" sx={{ color: '#1A5319' }}>
                        {'© '}
                        <Link color="inherit" href="https://meditacion.com/" sx={{ color: '#1A5319' }}>
                            ClarityMind
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
