import { Link } from 'react-router-dom';

import errorPhoto from '../images/rick_and_morty_nfp.jpeg'

import '../styles/layout/NotFoundPage.scss';


const NotFoundPage = () => {

return (
    <div className='notfound'>
        <h2 className='notfound__title'>Error 404: character not found</h2>
        <img className='notfound__img' src={errorPhoto} alt='Rick and Morty Quote: You are a piece of shit'/>
         <Link className='notfound__link'to="/Home"><i className="notfound__link--icon fa-solid fa-arrow-left"></i></Link>
    </div>
);
}

export default NotFoundPage;