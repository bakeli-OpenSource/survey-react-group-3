
import './App.css';
import Home from './pages/Home';
import Inscription from './pages/Inscription';
import Connexion from './pages/Connexion';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './pages/Form';
import DisplaySurvey from './pages/DisplaySurvey';
import Sondage from './pages/Sondage';
import Liste from './pages/Liste';

function App() {
  return (     
    <div className="App">
      <header className="App-header">
       

        <BrowserRouter>
        <Routes>     
        <Route path="/" element={<Home/>}/>
        <Route path="/Inscription" element={<Inscription/>}/>
        <Route path="/Connexion" element={<Connexion/>}/>
        <Route path="/Form" element={<Form/>}/>
        <Route path="/DisplaySurvey" element={<DisplaySurvey/>}/>
        <Route path="/Sondage/:id" element={<Sondage/>}/>
        <Route path='/Sondages/liste' element={<Liste/>}/>
        

        </Routes>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
