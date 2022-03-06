import React from 'react';

function ImagePopup(props) {
  return (
    <div className="page">
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
  </div>
  );
}

export default ImagePopup;
