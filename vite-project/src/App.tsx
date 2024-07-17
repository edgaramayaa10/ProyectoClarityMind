import { Route, Routes } from 'react-router-dom';
import './App.css'
import CardLogIn from './components/CardLogIn/CardLogIn';
import NavBarComponent from './components/NavBarComponent';
import ContainerComponent from './components/ContainerComponent/ContainerComponent';
import CardRegistroP from './components/CardRegistro/CardRegistroP';
import MeditacionGuiada from './components/MeditacionGuiada/MeditacionGuida';
import ControlDiario from './components/ControlDiario/ControlDiario';

function App() {
  return <>
  <NavBarComponent />
    <Routes>
      <Route path= "/" element={<ContainerComponent />} />
      <Route path="/login" element={<CardLogIn />} />
      <Route path="/login/Registrate" element={<CardRegistroP />}/>
      <Route path="/meditacion" element={<MeditacionGuiada />}/>
      <Route path="/control" element={<ControlDiario />}/>

    </Routes>
  </>;
}

export default App
