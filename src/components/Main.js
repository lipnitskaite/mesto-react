import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import Card from '../components/Card';

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
}) {

  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfoApi()
    .then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    })
    .catch((err) => console.log(err));
  });

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
        <Card card={card} />
      ));
    }
  }

    return (
      <main className="content">
        <section className="profile">
          <div className="profile__photo-container">
            <img src={userAvatar} className="profile__photo" alt="Аватар пользователя"/>
            <button className="profile__photo-edit-button" type="button" onClick={onEditAvatar}></button>
          </div>
          <div className="profile__main">
            <h1 className="profile__title">{userName}</h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
          <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
        </section>

        <section className="places page__places">
          {renderCards()}
        </section>
      </main>
    );
}

export default Main;
