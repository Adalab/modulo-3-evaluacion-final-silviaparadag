import '../styles/layout/Header.scss';
import logo from '../images/rick_and_morty_logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    
    return(
        <header className="header">
          <Link to='/'><img src={logo} alt="Rick and Morty" className='header__img' /></Link>    
        </header>
    )
}

export default Header;