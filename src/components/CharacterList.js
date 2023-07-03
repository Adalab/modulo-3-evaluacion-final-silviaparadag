import EachCharacterData from './EachCharacterData';

const CharacterList = ({characterList, searchByName}) => {
    
    const dataList = () => {
        if (characterList.length >= 1) {
            return characterList.map( (eachCharacterData) => <li key={eachCharacterData.id} className="card">
        <EachCharacterData eachCharacterData={eachCharacterData}/>
    </li> )} else {
        return (<p>El personaje {searchByName} no existe</p>);
    }
    }

    return (
        <ul className="cards">
        {dataList()}
        </ul>

    );
}

export default CharacterList;