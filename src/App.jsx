import React from 'react';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Servico from './pages/Servico';
import Galeria from './pages/Galeria';
import Footer from './components/Footer';
import GaleriaLogos from './pages/GaleriaLogos';
import { Analytics } from "@vercel/analytics/react"
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <Servico />
      <Galeria />
      <GaleriaLogos />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
