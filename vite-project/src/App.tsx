import { Route, Routes } from 'react-router-dom';
import './App.css'
import CardLogIn from './components/CardLogIn/CardLogIn';
import NavBarComponent from './components/NavBarComponent';
import CardRegistroP from './components/CardRegistro/CardRegistroP';
import MeditacionGuiada from './components/MeditacionGuiada/MeditacionGuida';
import ControlDiario from './components/ControlDiario/ControlDiario';
import HomePage from './components/HomePage/HomePage';
import ActivarCuenta from './components/CardRegistro/ActivarCuenta';
import Profile from './components/Profile/Profile'
function App() {
  return <>
  <NavBarComponent />
    <Routes>
    <Route path="/" element={<HomePage />} />
      <Route path="/activar/:token" element={<ActivarCuenta />} />
      <Route path="/login" element={<CardLogIn />} />
      <Route path="/login/Registrate" element={<CardRegistroP />}/>
      <Route path="/meditacion" element={<MeditacionGuiada />}/>
      <Route path="/control" element={<ControlDiario />}/>
      <Route path="/profile" element={<Profile />}/>
      </Routes>
  </>;
}

export default App
