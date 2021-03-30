import React from 'react'
import logo from "../logo.png"
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               <div className="container">
    <a className="navbar-brand" href="#"><img className="logo" src={logo}></img></a>
    <h3 className="navtext1">@tony's</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} className="fav-icon"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ml-auto">


      <li className="nav-item active">
        <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">About me</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Contact</a>
        </li>
        
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
