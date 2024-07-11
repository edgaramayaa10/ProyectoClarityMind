import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import './ContainerComponent.css';
import hardvard from '../IMG/Harvard_University_coat_of_arms.svg.png';

const ContainerComponent = () => {
  return (
    <React.Fragment>
      <CssBaseline />
        <Box sx={{ bgcolor: '#FBF7F0', color:'#045346', height: '500px', p: 2 }}>
        <Typography className='title' sx={{fontWeight: 'bold', textAlign:'center', fontFamily:'monospace'}} variant='h5'>¿QUE ES LA MEDITACIÓN?</Typography>
      <Box sx={{display: 'flex', justifyContent:'space-evenly', flexGrow: '3', padding: '15px'}}>
        <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={hardvard}sx={{width:'80px', height:'80px', marginLeft: 'auto', marginRight:'auto'}}
      />
      <CardContent>
        <Typography sx={{textAlign: 'center'}} gutterBottom variant="h5" component="div">
          Harvard Study
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Con la práctica regular, la meditación también puede ayudarte a obtener una conciencia más profunda de tu yo interior. Incluso existe cierta evidencia de que la meditación cambia el cerebro: amplía áreas de tejido cerebral que nos ayudan a pensar y aprender... mientras disminuye áreas que nos causan estrés y ansiedad. ¿Has meditado hoy?
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{backgroundColor: '#FCD961', color: '#045346'}} size="small">Share</Button>
        <Button sx={{backgroundColor:'#045346 ', color:'#FCD961'}} size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={hardvard}sx={{width:'80px', height:'80px', marginLeft: 'auto', marginRight:'auto', display:'flex'}}
      />
      <CardContent>
        <Typography sx={{textAlign: 'center'}} gutterBottom variant="h5" component="div">
          Elizabeth Blackburn
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Con la práctica regular, la meditación también puede ayudarte a obtener una conciencia más profunda de tu yo interior. Incluso existe cierta evidencia de que la meditación cambia el cerebro: amplía áreas de tejido cerebral que nos ayudan a pensar y aprender... mientras disminuye áreas que nos causan estrés y ansiedad. ¿Has meditado hoy?
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{backgroundColor: '#FCD961', color: '#045346'}} size="small">Share</Button>
        <Button sx={{backgroundColor:'#045346 ', color:'#FCD961'}} size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={hardvard}sx={{width:'80px', height:'80px', marginLeft: 'auto', marginRight:'auto', display:'flex'}}
      />
      <CardContent>
        <Typography sx={{textAlign: 'center'}} gutterBottom variant="h5" component="div">
          Elizabeth Blackburn
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Con la práctica regular, la meditación también puede ayudarte a obtener una conciencia más profunda de tu yo interior. Incluso existe cierta evidencia de que la meditación cambia el cerebro: amplía áreas de tejido cerebral que nos ayudan a pensar y aprender... mientras disminuye áreas que nos causan estrés y ansiedad. ¿Has meditado hoy?
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{backgroundColor: '#FCD961', color: '#045346'}} size="small">Share</Button>
        <Button sx={{backgroundColor:'#045346 ', color:'#FCD961'}} size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Box>

        
        
        </Box>
    </React.Fragment>
  );
}

export default ContainerComponent;