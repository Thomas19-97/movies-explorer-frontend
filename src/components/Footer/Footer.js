import './Footer.css';
const Footer = () =>{
    return (
        <footer className='footer'>
            <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className='footer__container'>
                <p className='footer__copyright'>© 2024</p>
                <nav className='footer__navigation'>
                    <ul className='footer__navigation-list'>
                        <li className='footer__navigation-item'>
                            <a className='footer__link' href='https://practicum.yandex.ru/' target='_blank' rel='noreferrer'>Яндекс.Практикум</a>
                        </li>
                        <li className='footer__navigation-item'>
                            <a className='footer__link' href='https://github.com/TYHEC' target='_blank' rel='noreferrer'>Github</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}
export default Footer;