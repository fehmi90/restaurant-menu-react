import React from "react";
import logo from '../assets/logo.png';
import './Navbar.css';

import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
function Navbar() {
return(

<div className="navbar">

        <div className="leftnav">

          <NavLink to="/"> <a href="/#"><img src={logo} alt="" className="logo" /></a></NavLink>

        </div>

        <div className="rightnav">

          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          
          


        </div>

</div>

)};
    



export default Navbar;
