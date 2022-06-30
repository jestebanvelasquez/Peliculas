import React from "react";
import {Link} from 'react-router-dom'
import SearchMovie from "../buscador/SearchMovie";
import './Nav.css'


export default function navBar (){
    return(
        <div className="content">
        <nav className="nav">
            <ul className="ul-items">
            <li className="li-items">
                <Link to='/'>Home</Link>
                <Link  to='/favorites'> Movies Favorites</Link>

            </li>
            </ul>
            <div className="search">
                <SearchMovie />
            </div>
        </nav>

        </div>
        
    )
}



