import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getMovies, favorites, deleteMovie} from '../../redux/actions/actionMovies.js'
import { Link,  useHistory } from "react-router-dom";
import Movies from "../Movies/Movies.jsx";
import './Search.css'



export default function SearchMovie (){
    const history = useHistory()
    const [input, setInput] = useState('')

    function handleChange(e){
        console.log(input)
        setInput(
            e.target.value
        )
    }

    let dispatch = useDispatch()
    const moviesLoaded= useSelector((state)=>state.moviesLoaded)



    function
    handleSubmit(event) {
        event.preventDefault()
        dispatch(getMovies(input))
        setInput('')
        history.push('/')
    }

    return (
        <div className="container">
            {/* <span> Encuentra tus peliculas: </span> */}

            <form className="content-form"
            onSubmit={(e)=> handleSubmit (e)}>

                <div className="content-input">
                    <input
                    type='text'
                    placeholder='buscar pelicula...'
                    value={input}
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                <div  >
                    <button className="btn"   type='submit'>Buscar</button>
                </div>
            </form>
            
        </div>
    )
}

