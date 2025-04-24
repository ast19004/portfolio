import "./App.css";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import { Routes, Route, Link } from 'react-router-dom';
import About from './Components/About/About';

import { useState } from "react";
import Logo from "./Components/Layout/Logo/Logo";

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
      <footer>
        <span>
          WEB DEVELOPER
        </span>
        <Contact className="contact" />
      </footer>
    </div>
  );
}

export default App;
