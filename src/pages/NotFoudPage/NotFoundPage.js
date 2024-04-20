import { Link, useNavigate } from 'react-router-dom'
import './NotFoundPage.css'
const NotFoundPage = () =>{
    const navigate = useNavigate();
    return (
        <div className='not-found-page'>
            <div className='not-found-page__container'>
                <h1 className='not-found-page__title'>404</h1>
                <h2 className='not-found-page__subtitle'>Страница не найдена</h2>
            </div>
            <Link onClick={() => navigate(-2)} className="not-found-page__link">Назад</Link>
        </div>
    )
}
export default NotFoundPage;
