import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavorite } from "../../redux/actions/actionMovies";
import { Link } from "react-router-dom";
import './Favorites.css';


export default function FavoritesMovies (){

    let fav = useSelector((state)=> state.favorites)

    let dispatch = useDispatch()


    return (
        <div className="container ">
            <h1>Peliculas favoritas </h1>
            <ul>
                {
                    fav ? fav.map((movie) => {
                        return (
                        <div className='card-container'>
                            <div className='card' key={movie.imdbID}>
                                <img className='card-img' src={movie.Poster} alt='poster pelicula' />
                                <div className='card-info'>
                                    <Link className='' to={`/movie/${movie.imdbID}`}>
                                        <p className='text-title'>{movie.Title}</p>
                                    </Link>
                                    <button className='btn' style={{backgroundColor:"rgb(211, 100, 81)"}} onClick={() =>dispatch(deleteFavorite(movie.imdbID))}> X </button>
                                </div>
                            </div>
                        </div>
                    )
                    }) : 'No has agregado peliculas a favoritas...'
                }
            </ul>
        </div>
    )
}