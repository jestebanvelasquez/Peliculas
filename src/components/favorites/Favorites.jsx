import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavorite } from "../../redux/actions/actionMovies";
import { Link } from "react-router-dom";


export default function FavoritesMovies (){

    let fav = useSelector((state)=> state.favorites)

    let dispatch = useDispatch()


    return (
        <div>
            <h1>Peliculas favoritas: </h1>
            <ul>
                {
                    fav ? fav.map((movie) => {
                        return (
                            <div key={movie.id}>

                            <p> {movie.Title}</p>
                            <Link to={`/movie/${movie.imdbID}`}>
                                <img src={movie.Poster} alt='poster pelicula'/>
                            </Link>
                            

                            <button onClick={() =>dispatch(deleteFavorite(movie.imdbID))}> X </button>
                            </div>
                        )
                    }) : 'No has agregado peliculas a favoritas...'
                }
            </ul>
        </div>
    )
}