import React from 'react';

function PopupWithForm(props) {
  return (
    <div className="page">
      <section className={`popup popup_type_${props.name}`}>
        <div className="popup__overlay"></div>
        <div className="popup__content">
          <button className="popup__close" type="button"></button>
          <form className={`form form_type_${props.name}`} name={`${props.name}`} noValidate>
            <h2 className={"form__title"}>{`${props.title}`}</h2>
            {props.children}
            <button className="form__button form__button_type_submit-changes" type="submit" name="submit" value={`${props.buttonTitle}`}>{`${props.buttonTitle}`}</button>
          </form>
        </div>
      </section>
  </div>
  );
}

export default PopupWithForm;
