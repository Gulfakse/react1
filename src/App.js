import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes,Navigate} from 'react-router-dom';
import About from './pages/About';
import Posts from "./pages/Posts"
import Navbar from './component/UI/Navbar/Navbar';
import Error from './pages/Error';
import PostIdPage from './pages/PostIdPage';

function App() {
return(
  <BrowserRouter>
  <Navbar/>

  <Routes>
    <Route path="/about" element= {<About/>}/>
    <Route exact path="/posts/:id" element={<PostIdPage/>}/>
      <Route exact path="/posts" element={<Posts/>}/>
      <Route path="/error" element={<Error/>}/>
      <Route path="*" element={<Navigate to="/error" replace/>}/>
    </Routes>

  </BrowserRouter>
)
 
}

export default App;
