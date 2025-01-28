import React from 'react';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './styles/global.css'; // Caminho corrigido

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;