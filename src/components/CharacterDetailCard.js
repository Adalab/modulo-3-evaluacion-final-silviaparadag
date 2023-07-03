import { Link } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

const CharacterDetailCard = ({characterSelected}) => {
    if ( characterSelected.status === 'Alive') {
    return (
   <article className='card__item'>
        <img src={characterSelected.image} alt={characterSelected.name} className='card__item--img'/>
        <h2 className='card__item--title'>{characterSelected.name}</h2>
        <p className='card__item--text'>{characterSelected.species}</p>
        <p className='card__item--text'><i class="fa-solid fa-hand-spock fa-shake"></i>Hey, dude! I'm alive!</p>
        <p className='card__item--text'>{characterSelected.origin}</p>
        <p className='card__item--text'>Nº de episodios: {characterSelected.episodes}</p>
        <Link to="/">Volver</Link>
     </article>
     )
    } if (characterSelected.status === 'Dead') {
    return (
   <article className='card__item'>
        <img src={characterSelected.image} alt={characterSelected.name} className='card__item--img'/>
        <h2 className='card__item--title'>{characterSelected.name}</h2>
        <p className='card__item--text'>{characterSelected.species}</p>
        <p className='card__item--text'><i class="fa-sharp fa-solid fa-skull fa-beat-fade"></i>Ooops, I'm fucking dead!</p>
        <p className='card__item--text'>{characterSelected.origin}</p>
        <p className='card__item--text'>Nº de episodios: {characterSelected.episodes}</p>
        <Link to="/">Volver</Link>
     </article>
     )
    } if (characterSelected.status === 'Unknown') {
    return (
   <article className='card__item'>
        <img src={characterSelected.image} alt={characterSelected.name} className='card__item--img'/>
        <h2 className='card__item--title'>{characterSelected.name}</h2>
        <p className='card__item--text'>{characterSelected.species}</p>
        <p className='card__item--text'>No se sabe</p>
        <p className='card__item--text'>{characterSelected.origin}</p>
        <p className='card__item--text'>Nº de episodios: {characterSelected.episodes}</p>
        <Link to="/">Volver</Link>
     </article>
     )
    } 
    else {
        return (
             <NotFoundPage/> 
        )
    }

} 



export default CharacterDetailCard;

/* 

if (characterSelected) {}


else {
        return (
             <NotFoundPage/> 
        )
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