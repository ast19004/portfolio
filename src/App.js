import { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';

import Home from "./Components/Home/Home";
import About from './Components/About/About';
import Logo from "./Components/Layout/Logo/Logo";
import Footer from './Components/Layout/Footer/Footer'

import "./App.css";

function App() {
  const [toggleActive, setToggleActive] = useState(true);

  return (
    <div className="App">
      <header>
      {/* Navigation */}
        <nav className="nav_main">
          <Link to="/" onClick={() => { setToggleActive(prevState => !prevState)}}  className={ `${toggleActive && "active"}`}>Projects</Link> . {" "}
          <Link to="/about" onClick={() => { setToggleActive(prevState => !prevState)}} className={ `${!toggleActive && "active"}`}>About</Link>{" "}
        </nav>
      <Logo/>
      </header>
      
      {/* Routes */}
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
