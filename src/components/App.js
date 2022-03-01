import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

function App() {
  function handleEditAvatarClick() {
    const ButtonAvatar = document.querySelector('.profile__photo-edit-button');
    
    function openPopup() {
      const popupAvatar = document.querySelector('.popup_type_edit-avatar');
      popupAvatar.classList.add('popup_opened');
    }

    ButtonAvatar.addEventListener('click', openPopup());
  };

  return (
    <div className="page">
      <Header/>

      <Main 
        handleEditAvatarClick={handleEditAvatarClick}
      />

      <Footer />

      <section className="popup popup_type_edit-profile">
        <div className="popup__overlay"></div>
        <div className="popup__content">
          <button className="popup__close" type="button"></button>
          <form className="form form_type_edit" name="edit_profile" noValidate>
            <h2 className="form__title">Редактировать профиль</h2>
            <fieldset className="form__container">
              <input id="name-input" className="form__input form__input_type_name" placeholder="Имя" type="text" name="name" value="" required minLength="2" maxLength="40" />
              <span className="name-input-error form__input-error"></span>
              <input id="job-input" className="form__input form__input_type_job" placeholder="Занятие" type="text" name="about" value="" required minLength="2" maxLength="200" />
              <span className="job-input-error form__input-error"></span>
            </fieldset>
            <button className="form__button form__button_type_submit-changes" type="submit" name="submit" value="Сохранить">Сохранить</button>
          </form>
        </div>
      </section>

      <section className="popup popup_type_edit-avatar">
        <div className="popup__overlay"></div>
        <div className="popup__content">
          <button className="popup__close" type="button"></button>
          <form className="form form_type_edit-avatar" name="edit_avatar" noValidate>
            <h2 className="form__title">Обновить аватар</h2>
            <fieldset className="form__container">
              <input id="avatar-input" className="form__input form__input_type_avatar" type="url" name="avatar" placeholder="Ссылка на картинку" value="" required />
              <span className="avatar-input-error form__input-error"></span>
            </fieldset>
            <button className="form__button form__button_type_submit-avatar" type="submit" name="submit" value="Сохранить">Сохранить</button>
          </form>
        </div>
      </section>

      <section className="popup popup_type_add-post">
        <div className="popup__overlay"></div>
        <div className="popup__content">
          <button className="popup__close" type="button"></button>
          <form className="form form_type_add" name="add_item">
            <h2 className="form__title">Новое место</h2>
            <fieldset className="form__container">
              <input id="title-input" className="form__input form__input_type_post-title" placeholder="Название" type="text" name="name" placeholder="Название" required minLength="2" maxLength="30" />
              <span className="title-input-error form__input-error"></span>
              <input id="image-input" className="form__input form__input_type_post-image" placeholder="Ссылка на картинку" type="url" name="link" placeholder="Ссылка на картинку" required />
              <span className="image-input-error form__input-error"></span>
            </fieldset>
            <button className="form__button form__button_type_submit-new-post" type="submit" name="submit" value="Создать">Создать</button>
          </form>
        </div>
      </section>

      <section className="popup popup_type_delete-post">
        <div className="popup__overlay"></div>
        <div className="popup__content">
          <button className="popup__close" type="button"></button>
          <form className="form form_type_delete" name="delete_item">
            <h2 className="form__title">Вы уверены?</h2>
            <button className="form__button form__button_type_delete-post" type="submit" name="submit" value="Да">Да</button>
          </form>
        </div>
      </section>

      <section className="popup popup_type_image">
        <div className="popup__overlay"></div>
        <div className="popup__container">
          <button className="popup__close" type="button"></button>
          <figure className="popup__img-cap">
            <img alt="" className="popup__image" />
            <figcaption className="popup__caption">Caption</figcaption>
          </figure>
        </div>
      </section>

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
