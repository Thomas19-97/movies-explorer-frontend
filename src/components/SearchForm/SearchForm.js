import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css';
import { KEY_WORD_ERROR } from '../../config/config'

function SearchForm({ onSearch, onFilter, isCheckboxActive, isActive  }) {
    const currentLocation = useLocation().pathname;
    const [searchValue, setSearchValue] = useState("");
    const [isError, setIsError] = useState(false);

    // если мы на странице фильмов, получаем из хранилища поисковый запрос
    useEffect(() => {
        if (currentLocation === '/movies' && localStorage.getItem('movieSearch')) {
            setSearchValue(localStorage.getItem('movieSearch'));
        }
    }, [currentLocation]);


    function changeSearch(e) {
        setSearchValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (searchValue.trim().length === 0) {
            setIsError(true);
        } else {
            setIsError(false);
            onSearch(searchValue);
        }
    }

    return (
        <form className="search"
            onSubmit={handleSubmit}
            noValidate
            name="search-form">
            <div className="search__container" >
                <input
                    onChange={changeSearch}
                    value={searchValue || ""}
                    className="search__input"
                    id="search-input"
                    name="search-input"
                    type="text"
                    placeholder="Фильм"
                    required
                    minLength="1"
                    maxLength="500"
                />
                <button className="search__button" type="submit">Поиск</button>
            </div>
            <div className="search__filter">
            <label className="search__tumbler" htmlFor="filter-checkbox">
                <input
                    className="search__checkbox"
                    value="true"
                    id="filter-checkbox"
                    name="filter-checkbox"
                    type="checkbox"
                    onChange={onFilter}
                    checked={isActive}
                />
                <span className="search__slider" />
            </label>
            <p className="search__films">Короткометражки</p>
        </div>
            <span className={`search__error ${isError ? "search__error_active" : ""}`}>{KEY_WORD_ERROR}</span>
        </form>
    );
}

export default SearchForm;