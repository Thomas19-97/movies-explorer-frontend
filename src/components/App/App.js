import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoudPage/NotFoundPage';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/'
                    element={
                        <>
                            <Header loggedIn={false} />
                            <Main />
                            <Footer />
                        </>
                    }>
                </Route>
                <Route path='/movies'
                    element={
                        <>
                            <Header loggedIn={true} />
                            <Movies />
                            <Footer />
                        </>
                    }>
                </Route>
                <Route path='/saved-movies'
                    element={
                        <>
                            <Header loggedIn={true} />
                            <SavedMovies />
                            <Footer />
                        </>
                    }>
                </Route>
                <Route path='/profile'
                    element={
                        <>
                            <Header loggedIn={true} />
                            <Profile />
                        </>
                    }>
                </Route>
                <Route path='/signup'
                    element={
                        <Register />
                    }>
                </Route>
                <Route path='/signin'
                    element={
                        <Login />
                    }>
                </Route>
                <Route path='*'
                    element={
                        <NotFoundPage />
                    }>
                </Route>
            </Routes>
        </div>
    )
}
export default App;