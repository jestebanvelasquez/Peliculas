import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {detailMovie}  from "../../redux/actions/actionMovies.js";
import './MovieDetail.css'
import detail from '../../assets/detail.svg'


export default function Movie (){

    const movie = useSelector((state) => state.detail) 
    const dispatch = useDispatch()

    const params = useParams()


    useEffect(()=>{
        
        dispatch(detailMovie(params.imdbId))
       
    },[])

    return (
        <div className="container-detail"> 
            <div className="header">
                <h1  >Detail To Movie</h1>
                <img className="detail" src={detail} alt="" />

            </div>
            <div className="head">
                <div className="poster">
                    <img src={movie.Poster} alt='poster' />
                </div>
                <div className="content">
                    <p> {movie.Title}</p>
                    <p> Genre: {movie.Genre}</p>
                    <p>Rated: {movie.Rated}</p>
                    <p> Director: {movie.Director}</p>
                    <p>Actors: {movie.Actors}</p>
                    <p>Plop: {movie.Plot}</p>
                </div>
            </div>
        </div>
    )
}

// Title(pin):"Pirates of the Caribbean: The Curse of the Black Pearl"
// Year(pin):"2003"
// Rated(pin):"PG-13"
// Released(pin):"09 Jul 2003"
// Runtime(pin):"143 min"
// Genre(pin):"Action, Adventure, Fantasy"
// Director(pin):"Gore Verbinski"
// Writer(pin):"Ted Elliott, Terry Rossio, Stuart Beattie"
// Actors(pin):"Johnny Depp, Geoffrey Rush, Orlando Bloom"
// Plot(pin):"Blacksmith Will Turner teams up with eccentric pirate "Captain" Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead."
// Language(pin):"English"
// Country(pin):"United States"
// Awards(pin):"Nominated for 5 Oscars. 38 wins & 104 nominations total"
// Poster(pin):"https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"