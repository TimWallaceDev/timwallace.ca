import Hero from "./hero.js"
import About from "./about.js"
import Contact from "./contact.js";
import Projects from "./projects.js"
import Resume  from "./components/Resume/Resume.jsx"
import './App.scss';
import { consoleGreeting } from "./components/console.js";

function App() {
  consoleGreeting()
  return (
    <div className="App">
      <Resume/>
      <Hero />
      <About />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;
