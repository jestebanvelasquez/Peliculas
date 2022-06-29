import React from "react";
import {Link} from 'react-router-dom'
import SearchMovie from "../buscador/SearchMovie";


export default function navBar (){
    return(
        <nav>
            <ul>
                <Link to='/'>Home</Link>
                <Link  to='/favorites'> Movies Favorites</Link>
            </ul>
                <SearchMovie />
        </nav>
        
    )
}