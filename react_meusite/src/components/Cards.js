import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { useNavigate } from 'react-router-dom';

function Cards() {
  const navigate = useNavigate(); 

  return (
    <div className='cards'id='curiosidades'>
      <h1>Curiosidades</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            <CardItem
              src='images/img-1.jpg'
              text='Meu interesse pelo xadrez começou no IFRN. Fiquei em 2º lugar na SEMADEC e participei do Intercampi.'
              onClick={() => navigate('/')} 
              label='Xadrez'
            />
            <CardItem
              src='images/academia.jpg'
              text='Em 2024, assumi o desafio de melhorar minha forma física e manter uma rotina de academia, mesmo perto do fim do ano.'
              onClick={() => navigate('/')} 
              label='Academia'
            />
            <CardItem
              src='images/cozinha.jpg'
              text='Gosto de cozinhar por diversão, mas ainda estou longe de ser um chef de cozinha podemos dizer'
              onClick={() => navigate('/')} 
              label='Culinária'
            />
            <CardItem
              src='images/editorvideo.jpg'
              text='Desde os 14 anos, edito vídeos como hobby, explorando minha criatividade na edição.'
              onClick={() => navigate('/')} 
              label='Edição de Vídeos'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Nos momentos de lazer, gosto de assistir um pouco de determinados animes.'
              onClick={() => navigate('/')} 
              label='Anime'
            />
          </ul>
           <h1 id='projetos'>Meus projetos</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.svg'
              text='Desenvolvi um site pessoal com React, integrando tecnologias modernas para criar um portfólio online.'
              label='Site Pessoal'
              onClick={() => window.open('https://github.com/20201174010029/React_SitePessoal', '_blank')}
            />
            <CardItem
              src='images/img-3.svg'
              text='Criei um jogo da memória simples e divertido para praticar lógica e JavaScript.'
              label='Jogo da Memória'
              onClick={() => window.open('https://github.com/20201174010029/Jogo_Da_M3moria', '_blank')}
            />
            <CardItem
              src='images/img-3.svg'
              text='Desenvolvi um jogo da forca interativo, aplicando conceitos básicos de programação.'
              label='Jogo da Forca'
              onClick={() => window.open('https://github.com/20201174010029/Jogo_Da_Forca', '_blank')}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
