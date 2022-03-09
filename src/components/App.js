import React, { useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import PopupWithForm from '../components/PopupWithForm';
import ImagePopup from '../components/ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleEditAvatarClick = () => {setIsEditAvatarPopupOpen(true)};
  const handleEditProfileClick = () => {setIsEditProfilePopupOpen(true)};
  const handleAddPlaceClick = () => {setIsAddPlacePopupOpen(true)};
  const handleCardClick = (card) => {setSelectedCard(card)};

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="page">
      <Header/>

      <Main 
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        buttonTitle="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={[
          <fieldset className="form__container">
            <input id="name-input" className="form__input form__input_type_name" placeholder="Имя" type="text" name="name" defaultValue="" required minLength="2" maxLength="40" />
            <span className="name-input-error form__input-error"></span>
            <input id="job-input" className="form__input form__input_type_job" placeholder="Занятие" type="text" name="about" defaultValue="" required minLength="2" maxLength="200" />
            <span className="job-input-error form__input-error"></span>
          </fieldset>
        ]}
      />

      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        buttonTitle="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={[
          <fieldset className="form__container">
            <input id="avatar-input" className="form__input form__input_type_avatar" type="url" name="avatar" placeholder="Ссылка на картинку" defaultValue="" required />
            <span className="avatar-input-error form__input-error"></span>
          </fieldset>
        ]}
      />

      <PopupWithForm
        name="add-post"
        title="Новое место"
        buttonTitle="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={[
          <fieldset className="form__container">
            <input id="title-input" className="form__input form__input_type_post-title" placeholder="Название" type="text" name="name" placeholder="Название" required minLength="2" maxLength="30" />
            <span className="title-input-error form__input-error"></span>
            <input id="image-input" className="form__input form__input_type_post-image" placeholder="Ссылка на картинку" type="url" name="link" placeholder="Ссылка на картинку" required />
            <span className="image-input-error form__input-error"></span>
          </fieldset>
        ]}
      />
      
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
  </div>
  );
}

export default App;
