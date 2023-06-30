import '../styles/layout/Header.scss';
import logo from '../images/rick_and_morty_logo.png'

const Header = () => {
    
    return(
        <header className="header">
          <img src={logo} alt="Rick and Morty" className='header__img' />
        </header>
    )
}

export default Header;