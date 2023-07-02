import { Link } from 'react-router-dom';

import errorPhoto from '../images/rick_and_morty_nfp.jpeg'



const NotFoundPage = () => {

return (
    <div>
        <h2>Error 404: character not found</h2>
        <img src={errorPhoto} alt='Rick and Morty Quote: You are a piece of shit' className='card__item--img'/>
         <Link to="/">Go back</Link>
    </div>
);
}

export default NotFoundPage;