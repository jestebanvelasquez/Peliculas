import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {getMovies, favorites, deleteMovie} from '../../redux/actions/actionMovies.js'
import './Movies.css'

export default function Movies() {
    const objPelicula = useSelector(state => state.moviesLoaded)
    const dispatch = useDispatch()
    return (
        <div>
            {
                objPelicula.map((movie) => {
                    return (
                        <div className='card-container'>
                            <div className='card' key={movie.imdbID}>
                                <img className='card-img' src={movie.Poster} alt='poster pelicula' />
                                <div className='card-info'>
                                    <Link className='' to={`/movie/${movie.imdbID}`}>
                                        <p className='text-title'>{movie.Title}</p>
                                    </Link>
                                    <button className='btn'  onClick={() => dispatch(favorites(movie))}> Me gusta </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}
