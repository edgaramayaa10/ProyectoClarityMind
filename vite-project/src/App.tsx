import { Route, Routes } from 'react-router-dom';
import './App.css'
import CardLogIn from './components/CardLogIn/CardLogIn';
import NavBarComponent from './components/NavBarComponent';
<<<<<<< HEAD
import ContainerComponent from './components/ContainerComponent/ContainerComponent';
import CardRegistroP from './components/CardRegistro/CardRegistroP';
=======
import CardRegistro from './components/CardRegistro/CardRegistro';
>>>>>>> 6f76396683d8f7104b7f28a5cbd1543885c22f40
import MeditacionGuiada from './components/MeditacionGuiada/MeditacionGuida';
import ControlDiario from './components/ControlDiario/ControlDiario';
import HomePage from './components/HomePage/HomePage';
function App() {
  return <>
  <NavBarComponent />
    <Routes>
    <Route path="/" element={<HomePage />} />

      
      <Route path="/login" element={<CardLogIn />} />
      <Route path="/login/Registrate" element={<CardRegistroP />}/>
      <Route path="/meditacion" element={<MeditacionGuiada />}/>
      <Route path="/control" element={<ControlDiario />}/>
      </Routes>
  </>;
}

export default App
