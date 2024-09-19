import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Curiosidades</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Quando ingressei no IFRN, meu interesse pelo xadrez foi despertado por algumas oportunidades que surgiram. Na SEMADEC, conquistei o 2º lugar, mas, ao participar do Intercampi, não tive a mesma sorte.'
              path='/'
              label='Xadrez'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Em momentos vagos e livre, gosto de explorar e assitir pequenos momentos
              de certos animes.'
              label='Anime'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.svg'
              text='Site pessoal intregrando junto com React.'
              label='Meu projeto'
              path='https://github.com/20201174010029/React_SitePessoal'
            />
            <CardItem
              src='images/img-3.svg'
              text='Jogo da mémoria'
              label='Meu projeto'
              path='https://github.com/20201174010029/Jogo_Da_M3moria'
            />
            <CardItem
              src='images/img-3.svg'
              text='Jogo da forca'
              label='Meu projeto'
              path='https://github.com/20201174010029/Jogo_Da_Forca'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
