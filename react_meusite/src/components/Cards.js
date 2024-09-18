import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Meus Projetos em andamento</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Dificuldade e desistência, palavras difernetes, poŕem com
              significados ao contrario.'
              label='Dificuldade'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Adicionar titulo ainda'
              label='Dificuldade'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Adicionar titulo ainda'
              label='Dificuldade'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Adicionar Titulo ainda'
              label='Dificuldade'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Dificuldade'
              label='Dificuldade'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
