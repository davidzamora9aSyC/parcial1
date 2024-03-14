import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './componentes/Profile.js'
import ModificarPerfil from './componentes/ModificarPerfil.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/perfil" element={<ModificarPerfil />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
