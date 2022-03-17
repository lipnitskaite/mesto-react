import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({
  card,
  onCardClick,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `card__delete-button ${isOwn ? 'card_delete-button' : 'card_delete-button_inactive'}`
  );

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
    `card__like-button ${isLiked ? 'card__like-button_active' : 'card__like-button'}`
  );

  const handleClick = () => onCardClick(card);
    return (
      <article className="card page__card">
        <img src={card.link} alt={card.name} className="card__image" onClick={handleClick}/>
        <div className="card__main">
          <h2 className="card__title">{card.name}</h2>
          <div className="card__like-container">
            <button className="card__like-button" type="button"></button>
            <p className="card__like-number">{card.likes.length}</p>
          </div> 
          <button className="card__delete-button" type="button"></button>
        </div>
      </article>
    );
}

export default Card;
