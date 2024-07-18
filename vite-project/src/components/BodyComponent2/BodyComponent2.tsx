import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FAQItem[] = [
  { question: '¿Cuánto tiempo deberías dedicarle día a día a practicarlo?', answer: '• Los expertos recomiendan que, como mínimo entre 30 y 45 minutos al día son los necesarios para notar a largo plazo los efectos. Si puedes más, bienvenidos sean.' },
  { 
    question: '¿Qué necesito para practicar meditación?', 
    answer: (
      <>
        La meditación no es una práctica que requiera de numerosos recursos, los esenciales que necesitamos para poder practicar son:
        <ul>
          <li> • Un espacio tranquilo donde poder practicar</li>
          <li> • Una esterilla</li>
          <li> • Ropa cómoda</li>
          <li> • Una almohada de meditación</li>
        </ul>
      </>
    )
  },
  { question: '¿Qué debo hacer cuando los pensamientos vienen?', answer: 'Pensar es una función natural de la mente, no hay necesidad de detener los pensamientos que se produzcan. Cuando estás meditando y te das cuenta que has estado perdido en tus pensamientos, simplemente regresa tu conciencia al objeto de tu meditación. No hay que hacer nada más. Incluso puedes tomar tus pensamientos como el objeto de la meditación, o descansar en conciencia abierta, dejando que éstos vengan y vayan sin prestarles demasiada atención.' },
  { question: '¿Cómo puedo contactar con el soporte de Netflix?', answer: '• Puedes contactar con nuestro soporte...' },
  { question: '¿Cómo puedo encontrar películas en Netflix?', answer: '• Puedes buscar películas usando la función de búsqueda...' },
  { question: '¿Qué es Netflix?', answer: '• Netflix es un servicio de streaming que ofrece una amplia variedad...' },
  { question: '¿Puedo descargar contenido para verlo sin conexión?', answer: '• Sí, puedes descargar películas y series para verlas sin conexión...' },
  { question: '¿Cómo puedo actualizar la información de mi cuenta?', answer: '• Puedes actualizar la información de tu cuenta accediendo a...' },
  { question: '¿Cuántos dispositivos puedo usar con una cuenta de Netflix?', answer: '• Puedes usar hasta cuatro dispositivos con una cuenta de Netflix...' },
];

const CustomAccordion = styled(Accordion)({
  backgroundColor: '#543310', // Fondo beige
  color: 'white', // Texto mostaza
  borderRadius: '8px', // Bordes redondeados
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Sombra suave
  '&:before': {
    display: 'none', // Ocultar línea superior
  },
  '&:hover': {
    backgroundColor: '#DEAC80', // Marrón en hover
    color: 'black',
  },
  '&.Mui-expanded': {
    margin: 'auto',
  },
});

const CustomAccordionSummary = styled(AccordionSummary)({
  '& .MuiAccordionSummary-content': {
    margin: '12px 0', // Espacio interno
  },
  '& .MuiIconButton-root': {
    color: '#D49F11', // Icono expandir (flecha) en color mostaza
  },
  '&:hover': {
    backgroundColor: 'inherit', // Mantener fondo en hover
  },
});

const BodyComponent2: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ p: 3, backgroundColor: 'white', textAlign: 'center', minHeight: '100vh', fontFamily: 'monospace' }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4, color: 'black', fontFamily: 'monospace' }}>
          Preguntas Frecuentes
        </Typography>
        {faqItems.map((item, index) => (
          <Box key={index} sx={{ width: '100%', maxWidth: '500px', mx: 'auto', mb: 5, textAlign: 'left', fontFamily: 'monospace' }}>
            <CustomAccordion>
              <CustomAccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography variant="subtitle1" sx={{ fontFamily: 'monospace', textAlign: 'left' }}>{item.question}</Typography>
              </CustomAccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" sx={{ fontFamily: 'monospace', textAlign: 'left' }}>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </CustomAccordion>
          </Box>
        ))}
      </Box>
    </React.Fragment>
  );
};

export default BodyComponent2;
