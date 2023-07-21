import { useEffect, useState } from 'react';
import {useLocation, matchPath} from 'react-router';
import {Routes, Route} from 'react-router-dom';

import ls from '../services/localStorage';
import callToApi from '../services/api';

import Landing from './Landing';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetailCard from './CharacterDetailCard';
import NotFoundPage from './NotFoundPage';
import Footer from './Footer';

import '../styles/App.scss';
import Loader from './Loader';

const App = ()  => {
  const characterSelectedFromLs = ls.get('characters', [])

  const [characterList, setCharacterList] = useState(characterSelectedFromLs);
  const [searchByName, setSearchByName] = useState('');
  const [searchByOrigin, setSearchByOrigin] = useState('All');
  const [searchBySpecies, setSearchBySpecies] = useState('All');
  const [isLoading, setIsLoading] = useState(false);
 
 

  useEffect( () => {
    if (ls.get('characters', null) === null) { 
      setIsLoading(true);
      callToApi().then((cleanDataApi) => {
        setCharacterList(cleanDataApi);
        setIsLoading(false);
      ls.set('characters', cleanDataApi)
    })
  }
  }, []);


  const handleFilter = ( varName, varValue ) => {
    if (varName === 'name') {
      setSearchByName(varValue);
    } if (varName === 'origin') {
      setSearchByOrigin(varValue);
    } else {
      setSearchBySpecies(varValue);
    }
  };


  const filteredCharacters = characterList
    .filter( (eachCharacter) => 
  eachCharacter.name.toLowerCase().includes(searchByName.toLowerCase()))
    .filter( (eachCharacter) => (
      searchByOrigin === 'All'? true : eachCharacter.origin === searchByOrigin
    ))
    .filter( (eachCharacter) => (
      searchBySpecies === 'All' ? true: eachCharacter.species === searchBySpecies));

  const origins = characterList.map( (eachCharacter) => eachCharacter.origin);
  const species = characterList.map( (eachCharacter) => eachCharacter.species);

  const newOrigins = [...new Set (origins)];
  const newSpecies = [...new Set(species)];



  const {pathname} = useLocation();
  const routeData = matchPath('/character/:id', pathname);
  const characterId = routeData !== null ? routeData.params.id : null ;

  const characterSelected = characterList.find( (character) => parseInt(character.id) === parseInt(characterId));
  console.log(characterSelected);
   

  return (
        <div className="App"> 
          <Routes>
             <Route path="/" element={<Landing />}></Route>
              <Route path='/Home' element={
                <><Header/>
                <main className='main'>
                  <Filters 
                      searchByName={searchByName}  
                      searchByOrigin={searchByOrigin}
                      searchBySpecies={searchBySpecies}
                      newOrigins={newOrigins}
                      origins={origins}
                      newSpecies={newSpecies}
                      handleFilter={handleFilter} 
                    />
                    {isLoading ? <Loader/> : <CharacterList characterList={filteredCharacters} searchByName={searchByName} />}
                 </main></>}
              />
              <Route path='/character/:id' element={<CharacterDetailCard characterSelected={characterSelected}/>}/>
              <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
          <Footer/>
        </div>
  );
}

export default App;

