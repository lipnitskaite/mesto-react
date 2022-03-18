import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import PopupWithForm from '../components/PopupWithForm';
import EditProfilePopup from '../components/EditProfilePopup';
import ImagePopup from '../components/ImagePopup';
import api from '../utils/api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({name: '', about: ''});

  const handleEditAvatarClick = () => {setIsEditAvatarPopupOpen(true)};
  const handleEditProfileClick = () => {setIsEditProfilePopupOpen(true)};
  const handleAddCardClick = () => {setIsAddCardPopupOpen(true)};
  const handleCardClick = (card) => {setSelectedCard(card)};

  const handleUpdateUser = (res) => {
    api.updateUserInfo(res)
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch((err) => console.log(err));    
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    setSelectedCard(null);
  };

  useEffect(() => {
    api.getUserInfoApi()
    .then((res) => {
      setCurrentUser(res);
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header/>

        <Main 
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddCard={handleAddCardClick}
          onCardClick={handleCardClick}
        />

        <Footer />

        <EditProfilePopup 
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <PopupWithForm
          name="edit-avatar"
          title="Обновить аватар"
          buttonTitle="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
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
          isOpen={isAddCardPopupOpen}
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
    </CurrentUserContext.Provider>
  );
}

export default App;
