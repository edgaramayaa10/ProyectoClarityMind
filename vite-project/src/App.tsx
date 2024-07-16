import { Route, Routes } from 'react-router-dom';
import './App.css'
import CardLogIn from './components/CardLogIn/CardLogIn';
import NavBarComponent from './components/NavBarComponent';
import ContainerComponent from './components/ContainerComponent/ContainerComponent';
import CardRegistro from './components/CardRegistro/CardRegistro';
import MeditacionGuiada from './components/MeditacionGuiada/MeditacionGuida';
import ControlDiario from './components/ControlDiario/ControlDiario';
import Footer from './components/Footer/Footer';

function App() {
  return <>
  <NavBarComponent />
  <Footer />
    <Routes>
      <Route path= "/" element={<ContainerComponent />} />
      <Route path="/login" element={<CardLogIn />} />
      <Route path="/login/Registrate" element={<CardRegistro />}/>
      <Route path="/meditacion" element={<MeditacionGuiada />}/>
      <Route path="/control" element={<ControlDiario />}/>
      

    </Routes>
  </>;
}

export default App
