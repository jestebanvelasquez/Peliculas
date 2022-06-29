import React from 'react';
import {Route, Switch} from 'react-router-dom'
import NavBar from './components/nav/NavBar.jsx';

import './App.css';
import FavoritesMovies from './components/favorites/Favorites.jsx';
import Movie from './components/MovieDetail/Movie.js';
import Header from './components/Header/Header.jsx';
import Movies from './components/Movies/Movies.jsx';


function App() {
  return (
    <div className="App">

      <Route   path= '/' component={Header}/>
      <Route   path= '/' component={NavBar}/>
      <Route   exact path= '/' component={Movies}/>
      <Route   exact path= '/favorites' component={FavoritesMovies}/> 
      <Route   exact path='/movie/:imdbId' component={Movie} />

    </div>
  );
}

export default App;
