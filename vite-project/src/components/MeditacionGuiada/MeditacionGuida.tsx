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

// Importa los componentes de contenido específicos
import MeditacionesTradicionales from "./MeditacionesTradicionales";
import MeditacionVisualizaciones from "./MeditacionVisualizaciones";
import RelajacionEscaneo from "./RelajacionEscaneo";
import TonosBinaturales from "./TonosBinaurales";
import Afirmaciones from "./Afirmaciones";
import MeditacionRespiracion from "./MeditacionRespiracion";
import Mindfunless from "./Mindfunless";
import MeditacionDormir from "./MeditacionDormir";

const MeditacionGuiada = () => {
  const [selectedText, setSelectedText] = useState<string | null>(null);

  const handleListItemClick = (text: string) => {
    setSelectedText(text);
  };

  const renderSelectedContent = () => {
    switch (selectedText) {
      case "Meditaciones Tradicionales":
        return <MeditacionesTradicionales />;
      case "Meditacion con visualizaciones":
        return <MeditacionVisualizaciones />;
      case "Relajacion y escaneo corporal":
        return <RelajacionEscaneo />;
      case "Tonos Binaturales":
        return <TonosBinaturales />;
      case "Afirmaciones":
        return <Afirmaciones />;
      case "Meditacion guiada de atencion a la respiracion":
        return <MeditacionRespiracion />;
      case "Mindfunless":
        return <Mindfunless />;
      case "Meditacion para dormir mejor":
        return <MeditacionDormir />;

      // Agrega más casos para cada elemento de la lista
      default:
        return (
          <div>
            <Typography variant="h5">Meditacion</Typography>
            <Typography paragraph>
              Aquí va el texto específico para Meditacion.
            </Typography>
          </div>
        );
    }
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
            "Meditaciones Tradicionales",
            "Meditacion con visualizaciones",
            "Relajacion y escaneo corporal",
            "Tonos Binaturales",
            "Afirmaciones",
            "Meditacion guiada de atencion a la respiracion",
            "Mindfunless",
            "Meditacion para dormir mejor",
            // Asegúrate de tener los mismos nombres que en tu lista y en los casos del switch
          ].map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              onClick={() => handleListItemClick(text)}
            >
              <ListItemButton
                sx={{
                  "&:hover": {
                    bgcolor: "#E0A75E", // Cambia el color de fondo al hacer hover
                  },
                }}
              >
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 5,
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
