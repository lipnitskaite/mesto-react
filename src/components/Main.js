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

  // const [userName, setUserName] = useState("");
  // const [userDescription, setUserDescription] = useState("");
  // const [userAvatar, setUserAvatar] = useState("");
  const currentUser = React.useContext(CurrentUserContext);
  
  const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   api.getUserInfoApi()
  //   .then((res) => {
  //     setUserName(res.name);
  //     setUserDescription(res.about);
  //     setUserAvatar(res.avatar);
  //   })
  //   .catch((err) => console.log(err));
  // });

  useEffect(() => {
    api.getCards()
    .then((res) => {
      setCards(res);
    })
    .catch((err) => console.log(err));
  }, []);

  const renderCards = () => {
    if (cards.length) {
      return cards.map((card) => (
        <Card 
          card={card} 
          onCardClick={onCardClick}/>
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
