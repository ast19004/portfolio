import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Layout/Header";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Technologies from "./Components/Technologies/Technologies";

function App() {
  return (
    <div className="App">
      <hr className="page-break hidden" id="about"></hr>
      <Home />
      <main>
        <hr className="page-break" id="projects"></hr>
        <Projects />
      </main>
      <hr className="page-break" id="contact"></hr>
      <Contact />
    </div>
  );
}

export default App;
