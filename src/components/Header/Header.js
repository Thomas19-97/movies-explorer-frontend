import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import LoggedInNavigation from '../LogedInNavigation/LoggedInNavigation';


const Header = ({ loggedIn, isLoading }) => {
    const { pathname } = useLocation();
    return (
        <header className={`header ${pathname ==='/' ? 'header-auth' : ''}`}>
            <Link to='/' className='header__link'>
                <img className="header__logo" src={logo} alt="Логотип Movies Explorer"></img>
            </Link>

            {isLoading ? '' : loggedIn ? <LoggedInNavigation /> : <Navigation />}
        </header>
    )
}
export default Header;

