import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
// import Skills from "./components/Skills";
import './App.css';

import Contact from "./components/Contact";

function App() {
  return (
    <div className="portfolio-shell">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
