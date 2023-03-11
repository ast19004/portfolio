import "./App.css";
import About from "./Components/About/About";
import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import Projects from "./Components/Project/Projects";
import Technologies from "./Components/Technologies/Technologies";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <hr className="page-break" id="about"></hr>
      <About />
      <Technologies />
      <hr className="page-break" id="projects"></hr>
      <Projects />
      <hr className="page-break" id="contact"></hr>
    </div>
  );
}

export default App;
