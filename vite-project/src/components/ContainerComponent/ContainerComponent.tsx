import Slider from 'react-slick';
import { Box, Card, CardMedia, CardContent} from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import hardvard from '../IMG/El texto del párrafo.png'
const items = [
  {
    img: hardvard,
  },
  {
  img: "",
  },
  {
    img: "",
  },
  {
    img: 'https://via.placeholder.com/800x400',
  },
  {
    img: 'https://via.placeholder.com/800x400',
  },
  {
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
          <Card key={index}sx={{height:'300px'}}>
            <CardMedia component="img" height="400" image={item.img} />
            <CardContent>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
}

export default AutoPlayCarousel;
