import React from "react";
import "../styles/components/GaleriaLogos.css"; // Importe o CSS específico para a galeria

const GaleriaLogos = () => {
  return (
    <section id="galeria-logos" className="galeria-logos">
      <h1 className="galeriaLog-titulo " >Galeria de Logos</h1>
      <p className="galeriaLogo-descricao">Aqui estão algumas das Logos que criei.</p>
      <div className="galeria-container">
        {/* Adicione as logos aqui */}
        <div className="logo-item">
          <img
            src="/images/podepor2.png" 
            alt="Logo 1"
            className="logo-image"
          />
        </div>
        <div className="logo-item">
          <img
            src="/images/Frame7.png" 
            alt="Logo 2"
            className="logo-image"
          />
        </div>
        <div className="logo-item">
          <img
            src="/images/logo3.png" 
            alt="Logo 3"
            className="logo-image"
          />
        </div>
        <div className="logo-item">
          <img
            src="/images/logo-bh.png" 
            alt="Logo 4"
            className="logo-image"
          />
        </div>
        <div className="logo-item">
          <img
            src="/images/iepe.png" 
            alt="Logo 5"
            className="logo-image"
          />
        </div>
        <div className="logo-item">
          <img
            src="/images/frame36.png" 
            alt="Logo 6"
            className="logo-image"
          />
        </div>
        <div className="logo-item">
          <img
            src="/images/gruip.png" 
            alt="Logo 7"
            className="logo-image"
          />
        </div>
        <div className="logo-item">
          <img
            src="/images/biscuit.png" 
            alt="Logo 8"
            className="logo-image"
          />
        </div>
        {/* Adicione mais logos conforme necessário */}
      </div>
    </section>
  );
};

export default GaleriaLogos;