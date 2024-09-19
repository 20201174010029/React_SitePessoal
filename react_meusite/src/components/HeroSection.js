import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>João Deybson</h1>
      <p>Tenho 19 anos e estou cursando o ensino médio com curso tecnico intregado de Informática no IFRN.</p>
      <div className='hero-btns'>

        <Button 
        id="downloadBtn"
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        >
          Baixe meu portfólio
          </Button>

      </div>
    </div>
  );
}

export default HeroSection;
