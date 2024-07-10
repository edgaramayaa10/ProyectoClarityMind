import { Route, Routes } from 'react-router-dom';
import './App.css'
import CardLogIn from './components/CardLogIn/CardLogIn';
import NavBarComponent from './components/NavBarComponent';
import ContainerComponent from './components/ContainerComponent/ContainerComponent';

function App() {
  return <>
  <NavBarComponent />
    <Routes>
      <Route path= "/" element={<ContainerComponent />} />
      <Route path="/login" element={<CardLogIn />} />
    </Routes>
  </>;
}

export default App
