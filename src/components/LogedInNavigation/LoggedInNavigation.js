import './LoggedInNavigation.css';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Acc from '../../images/acc.svg'

const LoggedInNavigation = () => {
  const [showItems, setShowItems] = useState(false);
  const { pathname } = useLocation();

  const handleToggleMenu = () => setShowItems(!showItems);

  return (
    <nav className="logged-in-navigation">
      <button className={`logged-in-navigation__btn-menu ${pathname ==='/' ? 'logged-in-navigation__btn-menu_main': ''}`} type="button" onClick={handleToggleMenu}></button>
      <div className={`logged-in-navigation__container ${showItems ? 'logged-in-navigation__container_visible' : ''}`}>
        <div className="logged-in-navigation__sidebar">
          <div className="logged-in-navigation__list-container">
            <button className="logged-in-navigation__btn-close" type="button" onClick={handleToggleMenu}></button>
            <ul className="logged-in-navigation__list">
              <li className="logged-in-navigation__list-item logged-in-navigation__list-item_type_main">
                <Link to="/" className="logged-in-navigation__link">Главная</Link>
              </li>
              <li className="logged-in-navigation__list-item">
                <NavLink to="/movies"  className={`logged-in-navigation__link ${pathname ==='/' ? 'logged-in-navigation__link_main' : ''}`} >Фильмы</NavLink>
              </li>
              <li className="logged-in-navigation__list-item">
                <NavLink to="/saved-movies" className={`logged-in-navigation__link ${pathname ==='/' ? 'logged-in-navigation__link_main' : ''}`} >Сохранённые фильмы</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/profile" className={`logged-in-navigation__link  ${pathname==='/' ? 'logged-in-navigation__link_type_main' : 'logged-in-navigation__link_type_profile'}`}  >Аккаунт
          <img className='logged-in-navigation__pic' src={Acc} alt='Изображение'></img>
          </NavLink>

        </div>
      </div>
    </nav>
  );
};

export default LoggedInNavigation;