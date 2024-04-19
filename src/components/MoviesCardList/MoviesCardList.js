import './MoviesCardList.css';
import React, { useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { useLocation } from 'react-router-dom';

const MoviesCardList = ({ cards, buttonMore }) => {
  const [isLoading, setLoading] = useState(false);

  const handlePreloader = () => {
    setLoading(true);
  };
  const {pathname} = useLocation();

  return (
    <section className="cards">
      <ul className={`cards__list ${pathname === '/saved-movies' ? 'cards__list-saved':''}`}>
        {cards.map((card) => (
          <MoviesCard key={card.id} card={card} />
        ))}
      </ul>

      {isLoading ? (
        <Preloader />
      ) : (
        buttonMore && (
          <div className="cards__button-container">
            <button className="cards__button" type="button" name="more" onClick={handlePreloader}>Ещё</button>
          </div>
        )
      )}
    </section>
  );
};

export default MoviesCardList;