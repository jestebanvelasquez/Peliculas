import React from 'react';
import {Route} from 'react-router-dom'
import NavBar from './components/nav/NavBar.jsx';

import './App.css';
import FavoritesMovies from './components/favorites/Favorites.jsx';
import Movie from './components/MovieDetail/Movie.jsx';
import Header from './components/Header/Header.jsx';
import Movies from './components/Movies/Movies.jsx';


function App() {
  return (
    <div className="App">

      <Route   path= '/' component={NavBar}/>
      <Route   exact path= '/' component={Header}/>
      <Route   exact path= '/' component={Movies}/>
      <Route   exact path= '/favorites' component={FavoritesMovies}/> 
      <Route   exact path='/movie/:imdbId' component={Movie} />

    </div>
  );
}

export default App;
