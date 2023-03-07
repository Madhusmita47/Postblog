import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom"

const Profile = () => {
  const navigate=useNavigate()
  useEffect(() =>{
    if (!localStorage.getItem("token")) {
      navigate("/login")
    } else {
      console.log("Success")
    }
  },[])
  return (
    <div>
      <h1>This is my profile</h1>
    </div>
  )
}

export default Profile
