import React from 'react';

function CardItem(props) {
  return (
    <li className='cards__item' onClick={props.onClick}> 
      <div className='cards__item__link'> 
        <figure className='cards__item__pic-wrap' data-category={props.label}>
          <img
            className='cards__item__img'
            alt={props.label}  
            src={props.src}
          />
        </figure>
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{props.text}</h5>
        </div>
      </div>
    </li>
  );
}

export default CardItem;
