import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import PopupWithForm from '../components/PopupWithForm';
import EditProfilePopup from '../components/EditProfilePopup';
import EditAvatarPopup from '../components/EditAvatarPopup';
import ImagePopup from '../components/ImagePopup';
import api from '../utils/api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState('');
  const [cards, setCards] = useState([]);

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

  const handleUpdateAvatar = ({avatar}) => {
    api.updateUserAvatar(avatar)
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
    Promise.all([api.getUserInfoApi(), api.getCards()])
    .then(([userData, cards]) => {
      setCurrentUser(userData);
      setCards(cards);
    })
    .catch(err => console.log(err));
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


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header/>

        <Main 
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          cards={cards}
          onAddCard={handleAddCardClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />

        <Footer />

        <EditProfilePopup 
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
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
