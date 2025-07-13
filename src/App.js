import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import 'bootstrap/dist/css/bootstrap.min.css';

import Contact from "./components/Contact";

function App() {
  return (
    <div>
      
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
