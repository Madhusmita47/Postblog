import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'
import img from "../image/blog.png"
const Home = () => {
  return (
    <div className="parent">
      <div className="home">
        <div className="intro">
          <h2>Welcome to the Blogs Heaven!!</h2>
        </div>
        <div>
          <Link to={"/explore"}>
            <button className="explore">Explore</button>
          </Link>
        </div>
      </div>
      <div className="image">
        <img src={img} height={"500px"} />
      </div>
    </div>
  );
}

export default Home
