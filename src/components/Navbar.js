import React from 'react'
import { Link, NavLink} from 'react-router-dom';
import "../css/navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <NavLink to="/" className="navlink" exact activeStyle={{color:"chocolate"}}>Login</NavLink>
                </li>
                <li>
                    <NavLink to="/video" className="navlink" exact activeStyle={{color:"chocolate"}}>Video</NavLink>
                </li>
                <li>
                    <NavLink to="/date" className="navlink" exact activeStyle={{color:"chocolate"}}>Date</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
