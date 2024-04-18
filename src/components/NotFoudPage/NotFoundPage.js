import { Link } from 'react-router-dom'
import './NotFoundPage.css'
const NotFoundPage = () =>{
    return (
        <div className='not-found-page'>
            <div className='not-found-page__container'>
                <h1 className='not-found-page__title'>404</h1>
                <h2 className='not-found-page__subtitle'>Страница не найдена</h2>
            </div>
            <Link to="/" className="not-found-page__link">Назад</Link>
        </div>
    )
}
export default NotFoundPage;
