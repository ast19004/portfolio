import "./App.css";
import Header from "./Components/Header";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Projects from "./Components/Project/Projects";
import Technologies from "./Components/Technologies/Technologies";
import MainLogo from "./Components/MainLogo";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-welcome">
        <div className="intro">
          <section>
            <h1 className="decorative font-large">Anna Astle</h1>
            <span>WEB DEVELOPER</span>
          </section>
          <MainLogo className="App-logo" />
        </div>
        <ul className={"bottomNav"}>
          <li onClick={() => (window.location.href = "#projects")}>
            <ArrowDownwardIcon className="scrollIcon" />
          </li>
          <li className="links">
            <a
              href="https://www.linkedin.com/in/annaastle-webdeveloper"
              rel="noreferrer"
              target="_blank"
            >
              <LinkedInIcon color="action" />
            </a>
            <a
              href="https://github.com/ast19004"
              rel="noreferrer"
              target="_blank"
            >
              <GitHubIcon color="action" />
            </a>
          </li>
        </ul>
      </div>
      <hr className="page-break" id="projects"></hr>
      <Projects />
      <hr className="page-break" id="about"></hr>
      <Technologies />
      <hr className="page-break" id="contact"></hr>
    </div>
  );
}

export default App;
