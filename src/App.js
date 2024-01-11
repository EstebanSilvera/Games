import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Principal from './componentes/Principal';
import Sesion from './componentes/Sesion';
import "./componentes/css/style.css"

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Principal/>}>
        </Route>
        <Route path='Sesion' element={<Sesion/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
