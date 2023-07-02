import { useEffect, useState } from 'react';
import {useLocation, matchPath} from 'react-router';
import {Routes, Route} from 'react-router-dom';

import ls from '../services/localStorage';
import callToApi from '../services/api';

import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetailCard from './CharacterDetailCard';
import NotFoundPage from './NotFoundPage';
import Footer from './Footer';

import '../styles/App.scss';

const App = ()  => {
  const characterSelectedFromLs = ls.get('characters', [])

  const [characterList, setCharacterList] = useState(characterSelectedFromLs);
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


    /* OBTENER INFO CONTACTO */ 
    const {pathname} = useLocation();
    console.log(pathname);

    const routeData = matchPath('/character/:id', pathname);
    console.log(routeData);


    const characterId = routeData !== null ? routeData.params.id : null ;

    console.log(characterId);

    const characterSelected = characterList.find( (character) => parseInt(character.id) === parseInt(characterId));
    console.log(characterSelected);
   

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
              <Route path='/character/:id' element={<CharacterDetailCard characterSelected={characterSelected}/>}/>
              <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
          <Footer/>
        </div>
  );
}

export default App;

