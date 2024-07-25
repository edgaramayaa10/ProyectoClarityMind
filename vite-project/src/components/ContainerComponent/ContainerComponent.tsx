import Slider from 'react-slick';
import { Box, Card, CardMedia, CardContent} from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import hardvard from '../IMG/1.png';
import elisabeth from '../IMG/2.png';
import oms from '../IMG/3.png';
import laureys from '../IMG/4.png';
import hopkins from '../IMG/5.png';
import yale from '../IMG/6.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './ContainerComponent.css'
const items = [
  {
    img: hardvard,
  },
  {
  img: elisabeth,
  },
  {
    img: oms,
  },
  {
    img: laureys,
  },
  {
    img: hopkins,
  },
  {
    img: yale,
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
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <Box sx={{ width: '100%', margin: 'auto', marginTop: '70px' , }}>
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
