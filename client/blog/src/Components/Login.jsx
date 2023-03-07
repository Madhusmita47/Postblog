import React, { useState,useEffect} from 'react'
import "./login.css"
import { Link,useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token,settoken]=useState("")
  const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = await axios.post("http://localhost:3000/login", {
      email: email,
      password:password
    })
    console.log(data)
    if (data.status == 200) {
      alert("log in successfull")
       localStorage.setItem("token",data.data.data)
      navigate("/profile");
      
    }
    else if (data.status == 400) {
      alert(data.data.message);
    } else {
      alert("server error")
    }
    setEmail("")
    setPassword("")
    
  }


return (
    <>
      <div className="login">
        <form onSubmit={handleSubmit} className="form1">
          <div className="h1l">
            <h1>Login</h1>
          </div>

          <div className="userl">
            <label>Email</label>
            <input
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="inputl"
              placeholder="Enter Your Email"
              type={"email"}
              required
            />
          </div>
          <div className="userl">
            <label>Password</label>
            <input
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="inputl"
              placeholder="Enter Your Password"
              type={"password"}
              required
            />
          </div>
          <div className="lognbtn">
            <button type='submit' className="btnlgn1">Login</button>
          </div>
          <div className="sign">
            Don't have an account yet? Signup here!
            <Link to={"/signup"}>
              <button className="lgnbtn1">Signup</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login
