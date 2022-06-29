import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {detailMovie}  from "../../redux/actions/actionMovies.js";


export default function Movie (){

    const movie = useSelector((state) => state.detail) 
    const dispatch = useDispatch()

    const params = useParams()


    useEffect(()=>{
        
        dispatch(detailMovie(params.imdbId))
       
    },[])

    return (
        <ul> 
            <p> {movie.Title}</p>
            <p>{movie.Genre}</p>
            <img src={movie.Poster} alt='poster' />

                    
                    

        </ul>
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