import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';

function App() {
return(
  <BrowserRouter>
  <Routes>
    <Route path="/about" element= {<About/>}/>
      
    
    </Routes>
  </BrowserRouter>
)
 
}

export default App;
