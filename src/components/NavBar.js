import React from 'react'
import { NavLink } from 'react-router-dom';
import Emoji from 'a11y-react-emoji'
const NavBar = () => {
    return (
        <div className="navbar">
           <NavLink to="/mood"><button type="button"><Emoji symbol="🥰" label="mood" /></button></NavLink>
          </div>
            );
};

export default NavBar
