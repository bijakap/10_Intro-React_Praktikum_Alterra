import logo from './logo.svg';
import About from './pages/about';
import Home from './pages/home';
import Notfound from './pages/404'
import * as React from "react";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Contact_us from './pages/contact_us';
// import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact_us />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
