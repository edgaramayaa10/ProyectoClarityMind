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
                backgroundColor: '#658147',
                position: 'fixed',
                bottom: 0,
                width: '100%',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Meditación Guiada
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Encuentra paz y bienestar con nuestras meditaciones guiadas.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Enlaces
                        </Typography>
                        <Link href="#" variant="body2" color="text.secondary" display="block">
                            Política de Privacidad
                        </Link>
                        <Link href="#" variant="body2" color="text.secondary" display="block">
                            Términos de Servicio
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Contacto
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Email: claritymind.mind@gmail.com
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Teléfono: +34 123 456 789
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Síguenos
                        </Typography>
                        <IconButton color="inherit" href="https://facebook.com">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton color="inherit" href="https://twitter.com">
                            <TwitterIcon />
                        </IconButton>
                        <IconButton color="inherit" href="https://instagram.com">
                            <InstagramIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container spacing={4} sx={{ mt: 4 }}>
                    <Grid item xs={12}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
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
                    <Typography variant="body2" color="text.secondary" align="center">
                        {'© '}
                        <Link color="inherit" href="https://meditacion.com/">
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
