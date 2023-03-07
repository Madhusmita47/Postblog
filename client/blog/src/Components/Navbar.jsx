import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div>
          <Link className="blog" to={"/"}>
            <h1>Blogging Site</h1>
          </Link>
        </div>
        <div>
          <Link to="/signup">
            <button className="btnnav">Signup</button>
          </Link>
          <Link to="/login">
            <button className="btnnav">Login</button>
          </Link>
          <Link to="/about">
            <button className="btnnav">About</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar
