import "./App.css";
import Header from "./Components/Header";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Projects from "./Components/Project/Projects";
import Technologies from "./Components/Technologies/Technologies";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-welcome">
        <section className="intro">
          <h1 className="decorative">Anna Astle</h1>
          <span>WEB DEVELOPER</span>
        </section>
        <ul className={"bottomNav"}>
          <li>
            <ArrowDownwardIcon className="scrollIcon" />
          </li>
          <li className="links">
            <a
              href="https://www.linkedin.com/in/annaastle-webdeveloper"
              rel="noreferrer"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/ast19004"
              rel="noreferrer"
              target="_blank"
            >
              <GitHubIcon />
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
