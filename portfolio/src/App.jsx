import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Card />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default App