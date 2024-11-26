import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import "../css/Common.css";

function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <div className="logoDiv navbar-nav me-auto" >
              <NavLink className="logo infinity" ></NavLink>
            </div>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page" href="#">Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to='/about' className="nav-link" aria-current="page" href="#">About</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to='/contact' className="nav-link" aria-current="page" href="#">Contact</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/projects" className="nav-link" aria-current="page" href="#">Projects</NavLink>
              </li>

            </ul>


            <Link to='/contact' className="btn btn-outline-dark connect_btn " role="button">Hire Me</Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar
