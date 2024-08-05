import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

import MeditacionVisualizaciones from "./MeditacionVisualizaciones";
import RelajacionEscaneo from "./RelajacionEscaneo";
import TonosBinaurales from "./TonosBinaurales";
import Afirmaciones from "./Afirmaciones";
import MeditacionRespiracion from "./MeditacionRespiracion";
import Mindfulness from "./Mindfulness";
import MeditacionDormir from "./MeditacionDormir";

const MeditacionGuiada = () => {
  const [selectedTexts, setSelectedTexts] = useState<string[]>([]);

  const handleCheckboxChange = (text: string) => {
    setSelectedTexts(prevSelected => 
      prevSelected.includes(text) 
        ? prevSelected.filter(item => item !== text) 
        : [...prevSelected, text]
    );
  };

  const renderContent = () => {
    const components = [
      { text: "Meditacion con visualizaciones", component: <MeditacionVisualizaciones /> },
      { text: "Relajacion y escaneo corporal", component: <RelajacionEscaneo /> },
      { text: "Tonos Binaurales", component: <TonosBinaurales /> },
      { text: "Afirmaciones", component: <Afirmaciones /> },
      { text: "Meditacion guiada de atencion a la respiracion", component: <MeditacionRespiracion /> },
      { text: "Mindfunless", component: <Mindfulness /> },
      { text: "Meditacion para dormir mejor", component: <MeditacionDormir /> }
    ];

    // Filtra y renderiza los componentes seleccionados
    const selectedComponents = selectedTexts.length > 0 
      ? components.filter(comp => selectedTexts.includes(comp.text)) 
      : components;

    return selectedComponents.map((comp, index) => (
      <Box key={index} mb={2}>
        {comp.component}
      </Box>
    ));
  };

  const BrownCheckbox = styled(Checkbox)({
    color: '#8B4513', // Marrón claro para el color no marcado
    '&.Mui-checked': {
      color: '#8B4513', // Marrón claro para el color marcado
    },
  });

  const sections = [
    { text: "Meditacion con visualizaciones", description: "Al meditar con visualizaciones uno imagina un escenario y un resultado, al centrar la mente en una imagen mental concreta. Podemos decir que existen dos tipos de propósitos a la hora de realizar este tipo de meditación: relajarse y proyectarse." },
    { text: "Relajacion y escaneo corporal", description: "Es una técnica de meditación que te invita a centrar toda la atención en las sensaciones físicas del cuerpo, logrando conectar el cuerpo con la mente. Su objetivo principal no es la relajación sino ayudarnos a entender las sensaciones físicas, mentales y emocionales de nuestro cuerpo." },
    { text: "Tonos Binaurales", description: "Los sonidos binaurales son estímulos auditivos que están diseñados para escucharse con ambos oídos. Se pueden usar para inducir varios estados de conciencia, incluida la relajación, la meditación y el sueño." },
    { text: "Afirmaciones", description: "La Meditación con Afirmaciones es la práctica del pensamiento positivo y el auto-empoderamiento. Una afirmación es cualquier cosa que se repita en voz alta o en el pensamiento y se registran en nuestra mente subconsciente. Las afirmaciones efectivas son positivas, personales, específicas y en tiempo presente." },
    { text: "Meditacion guiada de atencion a la respiracion", description: "Consiste en hacer una serie de posturas con la respiración controlada. Esto ayuda a que tu cuerpo sea más flexible y a calmar tu mente. Para hacer las posturas, necesitas equilibrio y concentración. Esto te permite enfocarte menos en tu día ajetreado y más en el momento." },
    { text: "Mindfunless", description: "El mindfulness, también llamado atención plena o conciencia plena, consiste en estar atento de manera intencional a lo que hacemos, sin juzgar, apegarse, o rechazar en alguna forma la experiencia.​Es una práctica basada en la meditación vipassana" },
    { text: "Meditacion para dormir mejor", description: "Sigue estas meditaciones guiadas para mejorar la calidad de tu sueño." },
  ];

  return (
    <Box sx={{ display: "flex", bgcolor: "#fff" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(50% - ${20}px)`, ml: `${20}px` }}
      ></AppBar>
      <Drawer
        sx={{
          width: 20,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 300,
            boxSizing: "border-box",
            marginTop: "100px",
            bgcolor: "#fbf7f0", // Fondo del Drawer
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List sx={{ paddingTop: 0, paddingBottom: 0 }}>
          {sections.map((section) => (
            <ListItem key={section.text} disablePadding>
              <Tooltip 
                title={
                  <Box sx={{ fontSize: '20px', padding: '10px', maxWidth: '600px' }}>
                    {section.description}
                  </Box>
                }
                placement="right"
                arrow
                PopperProps={{
                  sx: {
                    '& .MuiTooltip-tooltip': {
                      bgcolor: '#FFDE95', // Color de fondo del Tooltip
                      color: '#6F4E37', // Color del texto
                      fontSize: '14px',
                      border: '1px solid #dadde9',
                      borderRadius: '4px',
                      maxWidth: 'none'
                    },
                    '& .MuiTooltip-arrow': {
                      color: '#f5f5f5',
                    },
                  }
                }}
              >
                <ListItemButton
                  sx={{
                    "&:hover": {
                      bgcolor: "#E0A75E", // Cambia el color de fondo al hacer hover
                    },
                  }}
                >
                  <BrownCheckbox
                    checked={selectedTexts.includes(section.text)}
                    onChange={() => handleCheckboxChange(section.text)}
                  />
                  <ListItemText primary={section.text} />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#fff",
          p: 3,
          marginLeft: "280px",
        }}
      >
        {/* Mostrar el contenido filtrado */}
        {renderContent()}
      </Box>
    </Box>
  );
};

export default MeditacionGuiada;
