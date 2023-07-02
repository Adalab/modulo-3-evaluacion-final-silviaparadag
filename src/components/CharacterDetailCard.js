import { Link } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

const CharacterDetailCard = ({characterData}) => {
    if (characterData) {
    return (
   <article className='card__item'>
        <img src={characterData.image} alt={characterData.name} className='card__item--img'/>
        <h2 className='card__item--title'>{characterData.name}</h2>
        <p className='card__item--text'>{characterData.species}</p>
        <p className='card__item--text'>{characterData.origin}</p>
        <p className='card__item--text'>Nº de episodios: {characterData.episodes}</p>
        <Link to="/">Volver</Link>
     </article>
     );
    } else {
        return (
            <div>
                <NotFoundPage/>
            </div>
        )
    }

} 


export default CharacterDetailCard;

/* 

}
else {
    return (
        <div>
             <p className='text-error'>Lo sentimos, ese contacto no existes</p>
             <Link to="/">Volver</Link>
        </div>
    )
}
*/