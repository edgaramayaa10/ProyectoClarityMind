import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

// Importa los componentes de contenido específicos
import MeditacionVisualizaciones from "./MeditacionVisualizaciones";
import RelajacionEscaneo from "./RelajacionEscaneo";
import TonosBinaurales from "./TonosBinaurales";
import Afirmaciones from "./Afirmaciones";
import MeditacionRespiracion from "./MeditacionRespiracion";
import Mindfunless from "./Mindfunless";
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

  const renderSelectedContent = () => {
    if (selectedTexts.length === 0) {
      return (
        <div>
          <Typography variant="h5">Meditacion</Typography>
          <Typography paragraph>
            Aquí va el texto específico para Meditacion.
          </Typography>
        </div>
      );
    }

    return (
      <>
        {selectedTexts.includes("Meditacion con visualizaciones") && <MeditacionVisualizaciones />}
        {selectedTexts.includes("Relajacion y escaneo corporal") && <RelajacionEscaneo />}
        {selectedTexts.includes("Tonos Binaurales") && <TonosBinaurales />}
        {selectedTexts.includes("Afirmaciones") && <Afirmaciones />}
        {selectedTexts.includes("Meditacion guiada de atencion a la respiracion") && <MeditacionRespiracion />}
        {selectedTexts.includes("Mindfunless") && <Mindfunless />}
        {selectedTexts.includes("Meditacion para dormir mejor") && <MeditacionDormir />}
      </>
    );
  };

  return (
    <Box sx={{ display: "flex" }}>
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
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List sx={{ paddingTop: 0, paddingBottom: 0 }}>
          {[
            "Meditacion con visualizaciones",
            "Relajacion y escaneo corporal",
            "Tonos Binaurales",
            "Afirmaciones",
            "Meditacion guiada de atencion a la respiracion",
            "Mindfunless",
            "Meditacion para dormir mejor",
          ].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                sx={{
                  "&:hover": {
                    bgcolor: "#E0A75E", // Cambia el color de fondo al hacer hover
                  },
                }}
              >
                <Checkbox
                  checked={selectedTexts.includes(text)}
                  onChange={() => handleCheckboxChange(text)}
                />
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          marginLeft: "280px",
        }}
      >
        {/* Mostrar el texto seleccionado */}
        {renderSelectedContent()}
      </Box>
    </Box>
  );
};

export default MeditacionGuiada;
