import EachCharacterData from './EachCharacterData';

import '../styles/layout/CharacterList.scss';


const CharacterList = ({characterList, searchByName}) => {
    
    const dataList = () => {
        if (characterList.length >= 1) {
            return characterList.map( (eachCharacterData) => <li key={eachCharacterData.id} className="card">
        <EachCharacterData eachCharacterData={eachCharacterData}/>
    </li> )} else {
        return (
            <div className="cards__error">
            <i className="cards__error--icon fa-regular fa-face-rolling-eyes"></i>
            <span className="cards__error--span">{searchByName}</span> 
            <p className='cards__error--message'>
                   "{searchByName}" isn't a name character</p>
         </div>);
    }
    }

    return (
        <ul className="cards">
        {dataList()}
        </ul>

    );
}

export default CharacterList;