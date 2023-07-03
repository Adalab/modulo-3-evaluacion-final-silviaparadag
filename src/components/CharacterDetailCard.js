import { Link } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';


import '../styles/layout/CharacterDetailCard.scss';
import '../styles/layout/CharacterList.scss';
import '../styles/layout/EachCharacterData.scss';


const CharacterDetailCard = ({characterSelected}) => {

     const characterStatus = () => {
        if ( characterSelected.status === 'Alive') {
            return <p className='article__item--text2'><i className="fa-solid fa-hand-spock fa-shake"></i>Hey, dude! I'm alive!</p>
        } if (characterSelected.status === 'Dead') {
            return <p className='card__item--text'><i class="fa-sharp fa-solid fa-skull fa-beat-fade"></i>Ooops, I'm fucking dead!</p>
        } else {
           return  <p className='card__item--text'>Unknown</p>
        }
    };
    if (characterSelected) {
        return (
        <div className='article' >
            <article className='article__item'>
                <img src={characterSelected.image} alt={characterSelected.name} className='article__item--img'/>
                <h2 className='article__item--title'>{characterSelected.name}</h2>
                <p className='article__item--text'>{characterSelected.species}</p>
                <p className='article__item--text'><i className="fa-solid fa-globe"></i>  {characterSelected.origin}</p>
                {characterStatus()}
                <p className='article__item--text'>Episodes num: <span className='article__item--text3'>{characterSelected.episodes}</span></p>
                
            </article>
            <Link  className='article__link'to="/"> <i className="article__link--icon fa-solid fa-arrow-left"></i></Link>
     </div>)
    } else {
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