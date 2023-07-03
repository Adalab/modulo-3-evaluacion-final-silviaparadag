import { Link } from 'react-router-dom';

import '../styles/layout/EachCharacterData.scss';

const EachCharacterData = ({eachCharacterData}) => {

return (
     <Link className='card__link' to={`/character/${eachCharacterData.id}`}>
         <article className='card__item'>
            <img src={eachCharacterData.image} alt={eachCharacterData.name} className='card__item--img'/>
            <div className="card__item--info">
                <h2 className='character__title'>{eachCharacterData.name}</h2>
                <p className='character__text'>{eachCharacterData.species}</p>
                <p className='character__text'><i className="character__text--icon fa-solid fa-globe"></i> {eachCharacterData.origin}</p>
            </div>
         </article>
     </Link>

);
}

export default EachCharacterData;
