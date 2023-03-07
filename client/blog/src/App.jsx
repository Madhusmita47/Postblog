import React, {useState,useEffect} from 'react'
import Signup from './Components/Signup'
import "./App.css"
import Login from './Components/Login'
import {BrowserRouter as Router ,Routes,Route,useNavigate} from "react-router-dom"
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Explore from './Components/Explore'
import About from './Components/About'
import axios from "axios"
import Profile from './Components/Profile'

const App =  () => {
  const [auth, setAuth] = useState("false")

  const navigate=useNavigate()
  useEffect(async ()=>{
    if (localStorage.getItem("token")) {
      navigate("/profile")
      let response = await axios.get("http://localhost:3000/me", {
        headers: {
          "x-api-key": localStorage.getItem("token")
          
        },withCredentials:true,
      }) 
      console.log(response); 
   } 
  }, [])

  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </>
  );
}

export default App
