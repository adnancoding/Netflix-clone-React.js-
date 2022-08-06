import React from 'react'
import logo from "../../nlogo.png"
import { Link } from "react-router-dom"
import {GoSearch} from "react-icons/go"


export const Header = () => {
    
  return (
    <nav className='header'>
        <img src={logo} alt='' />
        <div>
            <Link to="/tvshows">TV Shows</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/recent">Recently Added</Link>
            <Link to="/mylist">My List</Link>
        </div>

        <GoSearch />
    </nav>
    )
}
export default Header