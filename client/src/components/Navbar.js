import React from "react";
import "../components/assets/scss/Navbar.css"
import home from "../components/assets/img/home.svg";
import logo from "../components/assets/img/logo2.png";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand mx-5" href="#"><img src={logo} alt="logo" style={{width:"98px"}} /> </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto">
      <li className="nav-item active">
        <a className="nav-link text-white text-uppercase ml-5" href="#">
            <img src= {home} alt="home" style={{width:"25px", marginTop:"-7px"}} /> Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white text-uppercase ml-5" href="#">News</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white text-uppercase ml-5" href="#">Contact Us</a>
      </li>
    
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-primary my-2 my-sm-0"  type="submit"  >Search</button>
    </form>
  </div>
</nav>
    );

}

export default Navbar;