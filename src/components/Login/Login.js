import Form from '../Form/Form';
function Login() {
    return (
      <Form header="Рады видеть!" submit="Войти" question="Ещё не зарегистрированы?" link="Регистрация" path="/signup">
        <label className="form__item">
          <p className="form__item-title">E-mail</p>
          <input type="email" className="form__field" defaultValue="pochta@yandex.ru" required />
          <p className="form__error">Что-то пошло не так...</p>
        </label>
        <label className="form__item">
          <p className="form__item-title">Пароль</p>
          <input type="password" className="form__field"  defaultValue="" required />
          <p className="form__error ">Что-то пошло не так...</p>
        </label>
      </Form>
    );
  }
  
  export default Login;