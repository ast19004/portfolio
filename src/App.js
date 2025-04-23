import "./App.css";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import { Routes, Route, Link } from 'react-router-dom';
import { Box } from "@mui/material";
import About from './Components/About/About';

import styles from './Components/Home/Home.module.css';

function App() {
  return (
    <div className="App">
      <header>
      {/* Navigation */}
        <nav className="nav_main">
          <Link to="/">Home</Link> . {" "}
          <Link to="/about">About</Link>{" "}
        </nav>
              <Box component="h1" className={`${styles.home_name}`}>
          <Box
            component="span"
          >
            Anna
          </Box>
          <Box
            component="span"
          >stle</Box>
      </Box>

      </header>
      
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <main>
        <hr className="page-break" id="projects"></hr>
        <Projects />
      </main> */}
      {/* <hr className="page-break" id="contact"></hr> */}
      {/* <Contact /> */}
      <footer>
        <span style={{ position: "absolute", bottom: "8%", color: "whitesmoke", opacity: '0.3',fontSize: "0.88rem",  }}>
          WEB DEVELOPER
        </span>
        <Contact sx={{ position: 'absolute', bottom: 0, left: '0%'}} />
      </footer>
    </div>
  );
}

export default App;
