import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Navbar from './components/Navbar.jsx';
import Register from './pages/Register.jsx';
import Edit from './pages/Edit.jsx';
import Details from './pages/Details.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <span>Hello World! <marquee><strong>Rodrigo 2023!</strong></marquee></span>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route  path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/edit/:id" element={<Edit />}/>
            <Route path="/view/:id" element={<Details />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
