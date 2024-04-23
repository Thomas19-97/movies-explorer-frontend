import React from 'react';
import './MoviesCard.css';
import { CARDS_IMAGE_BASE_URL } from '../../config/config'

function MoviesCard({ card, savedCard, onSaveMovie, onDeleteMovie, isSavedFilms, savedMovies }) {
  const cardSaveButtonClassName = (
    `card__button card__button${savedCard ? '_active' : '_inactive'}`
  );

  // меняем отображение карточки на странице фильмов
  function handleCardClick() {
    if (savedCard) {
      onDeleteMovie(savedMovies.filter((movie) => movie.movieId === card.id)[0]);
    } else {
      onSaveMovie(card);
    }
  }

  // удаляем карточку на странице сохраненных фильмов
  function handleCardDelete() {
    onDeleteMovie(card);
  }

  //конвертируем длительность фильма
  function convertDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  }

  return (
    <li className="card">
      <a className="card__image-content" href={card.trailerLink} target="_blank" rel="noreferrer">
        <img className="card__image" src={isSavedFilms ? card.image : `${CARDS_IMAGE_BASE_URL}/${card.image.url}`} alt={card.nameRU} />
      </a>
      <div className="card__element" id={card._id}>
      <p className="card__title">{card.nameRU}</p>
        <div className="card__buttons">
          {isSavedFilms ? (
            <button
              onClick={handleCardDelete}
              className="card__button card__button_delete"
              type="button"
              aria-label="Кнопка для удаления фильма"
            ></button>
          ) : (
            <button
              className={cardSaveButtonClassName}
              type="button"
              aria-label="Кнопка для сохранения и удаления фильма"
              onClick={handleCardClick}
            ></button>
          )}
        </div>
      </div>
      <p className="card__duration">{convertDuration(card.duration)}</p>
    </li>
  );
}


export default MoviesCard;