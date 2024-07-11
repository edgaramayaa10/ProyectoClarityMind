import Slider from 'react-slick';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import elisabeth from '../IMG/Elisabeth_Blackburn.png'

const items = [
  {
    img: elisabeth,
  },
  {
    title: 'Elisabeth',
    description: 'Esta es la descripción de la imagen 2.',
    img: 'https://via.placeholder.com/800x400',
  },
  {
    title: 'Imagen 3',
    description: 'Esta es la descripción de la imagen 3.',
    img: 'https://via.placeholder.com/800x400',
  },
  {
    title: 'Imagen 4',
    description: 'Esta es la descripción de la imagen 3.',
    img: 'https://via.placeholder.com/800x400',
  },
  {
    title: 'Imagen 5',
    description: 'Esta es la descripción de la imagen 3.',
    img: 'https://via.placeholder.com/800x400',
  },
  {
    title: 'Imagen 6',
    description: 'Esta es la descripción de la imagen 3.',
    img: 'https://via.placeholder.com/800x400',
  },
  // Agrega más elementos según sea necesario
];

function AutoPlayCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <Box sx={{ width: '100%', margin: 'auto', mt: 0 , }}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <Card key={index}sx={{height:'400px'}}>
            <CardMedia component="img" height="400" image={item.img} alt={item.title} />
            <CardContent>
              <Typography variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
}

export default AutoPlayCarousel;
