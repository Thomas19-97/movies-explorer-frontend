import React, { useEffect, useContext, useState } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useForm from '../FormValidator/FormValidator';
import { USER_NAME_REGEX } from '../../config/config';
import { Link } from 'react-router-dom';

function Profile({ logOut, onUpdate, editSubmitTitle, isLoading }) {
    const [isDisabled, setIsDisabled] = useState(true);
    const currentUser = useContext(CurrentUserContext);

    const { enteredValues, errors, handleChange, isFormValid, resetForm } = useForm();

    const [name, setName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);
    const [isEqualValues, setEqualValues] = useState(true);

    useEffect(() => {
        if (currentUser) {
            resetForm(currentUser);
        }
    }, [currentUser, resetForm]);

    function handleSubmit(e) {
        e.preventDefault();

        let newUserName = "";
        let newUserEmail = "";

        enteredValues.name ? newUserName = enteredValues.name : newUserName = currentUser.name;
        enteredValues.email ? newUserEmail = enteredValues.email : newUserEmail = currentUser.email;

        if (!isEqualValues) {
            onUpdate({
                name: newUserName,
                email: newUserEmail,
            });
            resetForm();
        }

        setIsDisabled(true);
    }

    useEffect(() => {
        let name = true;
        let email = true;
        if (enteredValues.name) {
            name = enteredValues.name === currentUser.name;
        }
        if (enteredValues.email) {
            email = enteredValues.email === currentUser.email;
        }
        setEqualValues(name && email);
    }, [enteredValues.name, enteredValues.email]);

    useEffect(() => {
        if (!isLoading) {
            setName(currentUser.name);
            setEmail(currentUser.email);
        }
    }, [currentUser, isLoading]);

    useEffect(() => {
        if (enteredValues.name) {
            setName(enteredValues.name);
        }
        if (enteredValues.email) {
            setEmail(enteredValues.email);
        }
    }, [enteredValues.name, enteredValues.email]);


 

    const profileSubmitButtonClassName = (
        `profile__button ${isDisabled ? "profile__button_disabled" : ""} ${!isFormValid || isLoading || isEqualValues ? "submit-button_inactive" : ""}`
    );


    return (
        <section className="profile" id="profile" aria-label="Профиль пользователя">
            <form name="profile-form" className="profile__form" onSubmit={handleSubmit}>
                <h1 className="profile__title">Привет, {currentUser.name}!</h1>
                <div className="profile__container">
                    <p className='profile__field-title' htmlFor="name">Имя</p>
                    <input
                        onChange={handleChange}
                        pattern={USER_NAME_REGEX}
                        required
                        id="name"
                        name="name"
                        type="text"
                        className="profile__field-value"
                        value={`${enteredValues.name ? enteredValues.name : name}`}
                        minLength="2"
                        maxLength="30"
                    />
                    <p className='profile__field-title' htmlFor="email">E-mail</p>
                    <input
                        onChange={handleChange}
                        pattern="^\S+@\S+\.\S+$"
                        required
                        id="email"
                        name="email"
                        type="email"
                        className='profile__field-value'
                        value={`${enteredValues.email ? enteredValues.email : email}`}
                        minLength="2"
                        maxLength="30"
                    />
                </div>
                <button
                    className={profileSubmitButtonClassName}
                    type="submit"
                    disabled={!isFormValid || isLoading || isEqualValues ? true : false}
                >Редактировать</button>
                <Link
                    onClick={logOut}
                    className="profile__link"
                    type="button"
                    aria-label="Кнопка выхода из аккаунта"
                >Выйти из аккаунта</Link>
            </form>
        </section>
    );
}

export default Profile;