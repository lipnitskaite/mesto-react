import React from 'react';

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
}) {
    return (
      <main className="content">
        <section className="profile">
          <div className="profile__photo-container">
            <img src='#' className="profile__photo" alt=""/>
            <button className="profile__photo-edit-button" type="button" onClick={onEditAvatar}></button>
          </div>
          <div className="profile__main">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
          </div>
          <p className="profile__subtitle">Исследователь океана</p>
          <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
        </section>

        <section className="places page__places"></section>

      </main>
    );
}

export default Main;
