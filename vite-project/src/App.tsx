import { Route, Routes } from 'react-router-dom';
import './App.css'
import CardLogIn from './components/CardLogIn/CardLogIn';
import NavBarComponent from './components/NavBarComponent';

function App() {
  return <>
    <Routes>
      <Route path="/" element={<NavBarComponent />} />
      <Route path="/login" element={<CardLogIn />} />
    </Routes>
  </>;
}

export default App
