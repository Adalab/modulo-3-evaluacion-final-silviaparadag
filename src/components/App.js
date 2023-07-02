import '../styles/App.scss';
import { useEffect, useState } from 'react';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetailCard from './pages/CharacterDetailCard';
import Footer from './Footer';
import ls from '../services/localStorage';
import callToApi from '../services/api';
import {Link, Routes, Route} from 'react-router-dom';

const App = ()  => {
  const characterDataFromLs = ls.get('characters', [])

  const [characterList, setCharacterList] = useState(characterDataFromLs);
  const [searchByName, setSearchByName] = useState('');
  const [searchByOrigin, setSearchByOrigin] = useState('');
  const [searchBySpecies, setSearchBySpecies] = useState('');
 

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
    } if (varName === 'origin') {
      setSearchByOrigin(varValue);
    } else if (varName === 'species') {
      setSearchBySpecies(varValue);
    }
  };


  const filteredCharacters = characterList
    .filter( (eachCharacter) => 
  eachCharacter.name.toLowerCase().includes(searchByName.toLowerCase()))
    .filter( (eachCharacter) => {
    if (searchByOrigin === 'All') {
      return true;
    } else {
      return eachCharacter.origin === searchByOrigin;
    }
  }).filter( (eachCharacter) => {
    if (searchBySpecies === 'All') {
      return true;
    } else {
      return eachCharacter.species === searchBySpecies;
    }
  });

  const origins = characterList.map( (eachCharacter) => eachCharacter.origin);

  // const origins = ['Krootabulon', "Kyle's Teenyverse", 'Detoxifier', 'Earth (Replacement Dimension)', 'Gazorpazorp' ];

  const species = characterList.map( (eachCharacter) => eachCharacter.species);

  return (
        <div className="App"> 
          <Header/>
          <Routes>
              <Route path='/' element={
                <main className='main'>
                  <Filters 
                      searchByName={searchByName}  
                      searchByOrigin={searchByOrigin}
                      searchBySpecies={searchBySpecies}
                      origins={origins} 
                      species={species}
                      handleFilter={handleFilter} 
                    />
                    <CharacterList characterList={filteredCharacters}/>
                 </main>}
              />
            </Routes>
          <Footer/>
        </div>
  );
}

export default App;

