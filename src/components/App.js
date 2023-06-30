import '../styles/App.scss';
import { useEffect, useState } from 'react';
import Header from './Header';
import CharacterList from './CharacterList';
import Footer from './Footer';
import callToApi from '../services/api';
//import {Link, Route, Routes} from 'react-router-dom';

const App = ()  => {
  const [characterList, setCharacterList] = useState([]);


  useEffect( () => {
    callToApi().then((cleanData) => {
      setCharacterList(cleanData)
    })

  }, [])

  return (
        <div className="App"> 
        <Header/>
        <main className='main'>
          <CharacterList characterList={characterList}/>
        </main>
        <Footer/>
        </div>
  );
}

export default App;