import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import PopupWithForm from '../components/PopupWithForm';

function App() {
  function handleEditAvatarClick() {
    const buttonEditAvatar = document.querySelector('.profile__photo-edit-button');
    
    function openPopup() {
      const popupAvatar = document.querySelector('.popup_type_edit-avatar');
      popupAvatar.classList.add('popup_opened');
    }

    buttonEditAvatar.addEventListener('click', openPopup());
  };

  function handleEditProfileClick() {
    const buttonEditProfile = document.querySelector('.profile__edit-button');
    
    function openPopup() {
      const popupProfile = document.querySelector('.popup_type_edit-profile');
      popupProfile.classList.add('popup_opened');
    }

    buttonEditProfile.addEventListener('click', openPopup());
  };

  function handleAddPlaceClick() {
    const buttonAddPlace = document.querySelector('.profile__add-button');
    
    function openPopup() {
      const popupNewPlace = document.querySelector('.popup_type_add-post');
      popupNewPlace.classList.add('popup_opened');
    }

    buttonAddPlace.addEventListener('click', openPopup());
  };

  return (
    <div className="page">
      <Header/>

      <Main 
        handleEditAvatarClick={handleEditAvatarClick}
        handleEditProfileClick={handleEditProfileClick}
        handleAddPlaceClick={handleAddPlaceClick}
      />

      <Footer />

      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        buttonTitle="Сохранить"
        children={[
          <fieldset className="form__container">
            <input id="name-input" className="form__input form__input_type_name" placeholder="Имя" type="text" name="name" value="" required minLength="2" maxLength="40" />
            <span className="name-input-error form__input-error"></span>
            <input id="job-input" className="form__input form__input_type_job" placeholder="Занятие" type="text" name="about" value="" required minLength="2" maxLength="200" />
            <span className="job-input-error form__input-error"></span>
          </fieldset>
        ]}
      />

      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        buttonTitle="Сохранить"
        children={[
          <fieldset className="form__container">
            <input id="avatar-input" className="form__input form__input_type_avatar" type="url" name="avatar" placeholder="Ссылка на картинку" value="" required />
            <span className="avatar-input-error form__input-error"></span>
          </fieldset>
        ]}
      />

      <PopupWithForm
        name="add-post"
        title="Новое место"
        buttonTitle="Создать"
        children={[
          <fieldset className="form__container">
            <input id="title-input" className="form__input form__input_type_post-title" placeholder="Название" type="text" name="name" placeholder="Название" required minLength="2" maxLength="30" />
            <span className="title-input-error form__input-error"></span>
            <input id="image-input" className="form__input form__input_type_post-image" placeholder="Ссылка на картинку" type="url" name="link" placeholder="Ссылка на картинку" required />
            <span className="image-input-error form__input-error"></span>
          </fieldset>
        ]}
      />

      <PopupWithForm
        name="delete-post"
        title="Вы уверены?"
        buttonTitle="Да"
      />

      <template className="template">
        <article className="place page__place">
          <img alt="" className="place__image" />
          <div className="place__main">
            <h2 className="place__title"></h2>
            <div className="place__like-container">
              <button className="place__like-button" type="button"></button>
              <p className="place__like-number"></p>
            </div> 
            <button className="place__delete-button" type="button"></button>
          </div>
        </article>
      </template>
  </div>
  );
}

export default App;
