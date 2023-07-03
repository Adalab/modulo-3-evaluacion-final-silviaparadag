import { Link } from 'react-router-dom';

import logo from '../images/rick_and_morty_logo.png'

import '../styles/layout/Landing.scss';

const Landing = () => {
  return (
    <div className="landing">

      {/* <img className='landing__img' src={logo}  alt="Rick and Morty"></img> */}
      <p className="landing__title">
        Discover more about
        <span className="landing__title--strong">Rick and Morty</span>
      </p>
      <Link className='landing__btn' to="/Home">more
      </Link>
    </div>
  );
};
export default Landing;