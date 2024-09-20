import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

const HeroSection = () => {
  const downloadPortfolio = () => {
    const link = document.createElement('a');
    link.href = '/react_meusite/public/Pdf/Livro\ de\ Python\ \(desenvolvedores\).pdf'; // Caminho do PDF
    link.download = 'Me_contrata_logo.pdf'; 
    document.body.appendChild(link);
    link.click(); 
    document.body.removeChild(link); 
  };


  return (
    <div className='hero-container' id="sobre"> 
      <h1>João Deybson</h1>
      <p>Tenho xx anos e estou cursando o ensino médio com curso técnico integrado de Informática no IFRN.</p>
      <div className='hero-btns'>
        <Button 
          id="downloadBtn"
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={downloadPortfolio} 
        >
          Baixe meu portfólio
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
