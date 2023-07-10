import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from '../componets/Header';
import {AcercaNosotros} from '../pages/AcercaNosotros';
import Start  from '../componets/Start';
import Horarios from '../pages/Horarios';
import { Inicio } from '../pages/Inicio'
import './App.css'


function App() {
  return (
    <div>
 
      <Router>
        
        <Header />
        <Routes>
          
        <Route path="/" element={<Start/>} />
        <Route path="/inicio" element={<Inicio />} />
          <Route path="/about-us" element={<AcercaNosotros />} />
          <Route path="/schedules" element={<Horarios />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;


