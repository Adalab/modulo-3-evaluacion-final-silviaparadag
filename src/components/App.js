import '../styles/App.scss';
import { useEffect, useState } from 'react';
import Header from './Header';
import CharacterList from './CharacterList';
import Footer from './Footer';
import callToApi from '../services/api';
//import {Link, Route, Routes} from 'react-router-dom';

const App = ()  => {
  const [characterList, setCharacterList] = useState([]);
  const [searchByName, setSearchByName] = useState('');
 

  useEffect( () => {
    callToApi().then((cleanData) => {
      setCharacterList(cleanData)
    })

  }, [])

  

  const handleChangeSearchName = (ev) => {
    setSearchByName(ev.target.value);
  };

  const filteredCharacters = characterList.filter( (eachCharacter) => 
  eachCharacter.name.toLowerCase().includes(searchByName.toLowerCase())
  );

  return (
        <div className="App"> 
        <Header/>
        <main className='main'>
          <label className="form__label" htmlFor="search_name">
              Nombre:
              <input className="form__input-text" type="text" name="search_name" id="search_name" value={searchByName} onChange={handleChangeSearchName} />
          </label>
          <label className="form__label display-block" htmlFor="search_origin">
              Planeta:
              <select className="form__input-text" name="search_origin" id="search_origin" >
                <option value="All">Todos</option>
                <option value="Krootabulon">Krootabulon</option>
                <option value="Kyle's Teenyverse">Kyle's Teenyverse</option>
                <option value="Detoxifier">Detoxifier</option>
              </select>
            </label>
          <CharacterList characterList={filteredCharacters}/>
        </main>
        <Footer/>
        </div>
  );
}

export default App;

