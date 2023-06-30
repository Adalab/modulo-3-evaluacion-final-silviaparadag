import '../styles/App.scss';
import { useEffect, useState } from 'react';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import Footer from './Footer';
import ls from '../services/localStorage';
import callToApi from '../services/api';
//import {Link, Route, Routes} from 'react-router-dom';

const App = ()  => {
  const characterDataFromLs = ls.get('characters', [])

  const [characterList, setCharacterList] = useState(characterDataFromLs);
  const [searchByName, setSearchByName] = useState('');
  const [searchByOrigin, setSearchByOrigin] = useState('');
 

  useEffect( () => {
    if (ls.get('characters', null) === null) { 
    callToApi().then((cleanDataApi) => {
      setCharacterList(cleanDataApi);

      ls.set('characters', cleanDataApi)
    })
  }
  }, []);


  const handleFilter = ( varName, varValue ) => {
    if (varName === 'name') {
      setSearchByName(varValue);
    } else if (varName === 'origin') {
      setSearchByOrigin(varValue);
    }
  };


  const filteredCharacters = characterList
    .filter( (eachCharacter) => 
  eachCharacter.name.toLowerCase().includes(searchByName.toLowerCase())).filter( (eachCharacter) => {
    if (searchByOrigin === 'All') {
      return true;
    } else {
      return eachCharacter.origin === searchByOrigin;
    }
  })

  const origins = characterList.map( (eachCharacter) => eachCharacter.origin);

  // const origins = ['Krootabulon', "Kyle's Teenyverse", 'Detoxifier', 'Earth (Replacement Dimension)', 'Gazorpazorp' ];

  return (
        <div className="App"> 
        <Header/>
        <main className='main'>
          <Filters 
          searchByName={searchByName}  
          searchByOrigin={searchByOrigin}
          origins={origins} 
          handleFilter={handleFilter} 
          />
          <CharacterList characterList={filteredCharacters}/>
        </main>
        <Footer/>
        </div>
  );
}

export default App;

