const EachCharacterData = ({eachCharacterData}) => {

return (
    <>
     <article className='card__item'>
        <img src={eachCharacterData.image} alt={eachCharacterData.name} className='card__item--img'/>
        <h2 className='card__item--title'>{eachCharacterData.name}</h2>
        <p className='card__item--text'>{eachCharacterData.species}</p>
        <p className='card__item--text'>{eachCharacterData.origin}</p>
     </article>
    </>

);
}

export default EachCharacterData;