// src/App.tsx
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Toaster } from 'sonner'
import CardLogIn from './components/CardLogIn/CardLogIn';
import NavBarComponent from './components/NavBarComponent';
import CardRegistroP from './components/CardRegistro/CardRegistroP';
import MeditacionGuiada from './components/MeditacionGuiada/MeditacionGuida';
import ControlDiario from './components/ControlDiario/ControlDiario';
import HomePage from './components/HomePage/HomePage';
import ActivarCuenta from './components/CardRegistro/ActivarCuenta';
import Profile from './components/Profile/Profile';
import Grafica from './components/Grafica/Grafica';
import { AuthProvider } from './components/AuthContext/AuthContext';

function App() {
  return (
    <AuthProvider>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/activar/:token" element={<ActivarCuenta />} />
        <Route path="/login" element={<CardLogIn />} />
        <Route path="/login/Registrate" element={<CardRegistroP />} />
        <Route path="/meditacion" element={<MeditacionGuiada />} />
        <Route path="/control" element={<ControlDiario />} />
        <Route path="/Perfil" element={<Profile />} />
        <Route path="/grafica" element={<Grafica />} />

      </Routes>
    </AuthProvider>
  );
}

export default App;
