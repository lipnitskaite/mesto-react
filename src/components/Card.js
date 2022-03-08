function Card({
  card,
  onCardClick,
}) {

  const handleClick = () => onCardClick(card);

    return (
      <article className="place page__place">
        <img src={card.link} alt={card.name} className="place__image" onClick={handleClick}/>
        <div className="place__main">
          <h2 className="place__title">{card.name}</h2>
          <div className="place__like-container">
            <button className="place__like-button" type="button"></button>
            <p className="place__like-number">{card.likes.length}</p>
          </div> 
          <button className="place__delete-button" type="button"></button>
        </div>
      </article>
    );
}

export default Card;
