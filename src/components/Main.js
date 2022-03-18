import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import Card from '../components/Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({
  onEditAvatar,
  onEditProfile,
  onAddCard,
  onCardClick,
}) {

  const currentUser = React.useContext(CurrentUserContext);
  
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getCards()
    .then((res) => {
      setCards(res);
    })
    .catch((err) => console.log(err));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    })
    .catch((err) => console.log(err));
  }

  const renderCards = () => {
    if (cards.length) {
      return cards.map((card) => (
        <Card
          card={card} 
          onCardClick={onCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
      ));
    }
  }

    return (
      <main className="content">
        <section className="profile">
          <div className="profile__photo-container">
            <img src={currentUser.avatar} className="profile__photo" alt="Аватар пользователя"/>
            <button className="profile__photo-edit-button" type="button" onClick={onEditAvatar}></button>
          </div>
          <div className="profile__main">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
          <button className="profile__add-button" type="button" onClick={onAddCard}></button>
        </section>

        <section className="cards page__cards">
          {renderCards()}
        </section>
      </main>
    );
}

export default Main;
