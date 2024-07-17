import { Route, Routes } from 'react-router-dom';
import './App.css'
import CardLogIn from './components/CardLogIn/CardLogIn';
import NavBarComponent from './components/NavBarComponent';
import CardRegistro from './components/CardRegistro/CardRegistro';
import MeditacionGuiada from './components/MeditacionGuiada/MeditacionGuida';
import ControlDiario from './components/ControlDiario/ControlDiario';
import HomePage from './components/HomePage/HomePage';
function App() {
  return <>
  <NavBarComponent />
    <Routes>
    <Route path="/" element={<HomePage />} />

      
      <Route path="/login" element={<CardLogIn />} />
      <Route path="/login/Registrate" element={<CardRegistro />}/>
      <Route path="/meditacion" element={<MeditacionGuiada />}/>
      <Route path="/control" element={<ControlDiario />}/>
      </Routes>
  </>;
}

export default App
