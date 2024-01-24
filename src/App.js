
import './App.css';
import Home from './pages/Home';
import Inscription from './pages/Inscription';
import Connexion from './pages/Connexion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       

        <BrowserRouter>
        <Routes>     
        <Route path="/" element={<Home/>}/>
        <Route path="/Inscription" element={<Inscription/>}/>
        <Route path="/Connexion" element={<Connexion/>}/>
        </Routes>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
