import { Route, Routes } from 'react-router-dom';
import './App.css'
import CardLogIn from './components/CardLogIn/CardLogIn';
import NavBarComponent from './components/NavBarComponent';
import ContainerComponent from './components/ContainerComponent/ContainerComponent';
import CardRegistro from './components/CardRegistro/CardRegistro';
import MeditacionGuiada from './components/MeditacionGuiada/MeditacionGuida';
import ControlDiario from './components/ControlDiario/ControlDiario';
import MeditacionTradicional from './components/MeditacionTradicional/MeditacionTradicional';
import MeditacionVIsualizaciones from './components/MeditacionVisualizaciones/MeditacionVisualizaciones';
import MeditacionRelajacion from './components/MeditacionRelajacion/MeditacionRelajacion';
import MeditacionBinaurales from './components/MeditacionBinaurales/MeditacionBinaurales';
import MeditacionAfirmaciones from './components/MeditacionAfirmaciones/MeditacionAfirmaciones';
import MeditacionRespiracion from './components/MeditacionRespiracion/MeditacionRespiracion';
import MeditacionMindfunless from './components/MeditacionMindfunless/MeditacionMindfunless';
import MeditacionDormir from './components/MeditacionDormir/MeditacionDormir';

function App() {
  return <>
  <NavBarComponent />
    <Routes>
      <Route path= "/" element={<ContainerComponent />} />
      <Route path="/login" element={<CardLogIn />} />
      <Route path="/login/Registrate" element={<CardRegistro />}/>
      <Route path="/meditacion" element={<MeditacionGuiada />}/>
      <Route path="/meditacion/meditacionTradicional" element={<MeditacionTradicional />}/>
      <Route path="/meditacion/meditacionVisualizaciones" element={<MeditacionVIsualizaciones />}/>
      <Route path="/meditacion/meditacionRelajacion" element={<MeditacionRelajacion />}/>
      <Route path="/meditacion/meditacionBinaurales" element={<MeditacionBinaurales />}/>
      <Route path="/meditacion/meditacionAfirmaciones" element={<MeditacionAfirmaciones />}/>
      <Route path="/meditacion/meditacionRespiracion" element={<MeditacionRespiracion />}/>
      <Route path="/meditacion/meditacionMindfunless" element={<MeditacionMindfunless />}/>
      <Route path="/meditacion/meditacionDormir" element={<MeditacionDormir />}/>
      <Route path="/control" element={<ControlDiario />}/>

    </Routes>
  </>;
}

export default App
