import Form from '../Form/Form';

function Register() {
  return (
    <Form header="Добро пожаловать!" submit="Зарегистрироваться" question="Уже зарегистрированы?" link="Войти" path="/signin">
      <div className="form__item">
        <p className="form__item-title">Имя</p>
        <input type="text" className="form__field" defaultValue="Виталий" required placeholder='Имя'/>
        <p className="form__error">Что-то пошло не так...</p>
      </div>

      <div className="form__item">
        <p className="form__item-title">E-mail</p>
        <input type="email" className="form__field" defaultValue="pochta@yandex.ru" required placeholder='Email'/>
        <p className="form__error">Что-то пошло не так...</p>
      </div>

      <div className="form__item">
        <p className="form__item-title">Пароль</p>
        <input type="password" className="form__field form__field_color-error" defaultValue="••••••••••••••" required placeholder='Пароль'/>
        <p className="form__error form__error-display">Что-то пошло не так...</p>
      </div>
    </Form>
  );
}

export default Register;