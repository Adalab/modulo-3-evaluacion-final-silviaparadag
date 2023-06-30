import EachCharacterData from './EachCharacterData';

const CharacterList = ({characterList}) => {
    const dataList = characterList.map( (eachCharacterData) => <li key={eachCharacterData.id} className="card">
        <EachCharacterData eachCharacterData={eachCharacterData}/>
    </li> )

return (
    <ul className="cards">
       {dataList}
    </ul>

);
}

export default CharacterList;