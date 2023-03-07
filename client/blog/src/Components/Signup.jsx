import React,{useState} from 'react'
import "./signup.css"
import { Link } from 'react-router-dom';
import axios from "axios";



const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
      
    const handlesubmit = async (e) => {
        e.preventDefault(); 
        console.log(username, email, password);
         await axios.post("http://localhost:3000/register", {
            username: username,
            email: email,
            password:password
         }
          
         ).then((res) => {
           console.log(res)
          alert(res.data.message)
         }).catch(err => {
           console.log(err)
           alert(err.response.data.message)
         })
        // console.log(data)

        setUsername("")
        setEmail("");
        setPassword("");

    }
  return (
    <>
      <div className="signup">
        <form className="form" onSubmit={handlesubmit}>
          <div className="h1">
            <h1>Register</h1>
          </div>
          <div className="user">
            <label>User Name</label>
            <input
              value={username}
              className="inputs"
              placeholder="Enter Your Username"
              type={"text"}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="user">
            <label>Email</label>
            <input
              value={email}
              className="inputs"
              placeholder="Enter Your Email"
              type={"email"}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="user">
            <label>Password</label>
            <input
              value={password}
              className="inputs"
              placeholder="Enter Your Password"
              type={"password"}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="signbtn">
            <button className="btnsgn" type="submit">
       
              Signup{" "}
            </button>
          </div>
          <div className="signlgn">
            Already a user? login here!
            <Link to={"/login"}>
              <button className="lgnbtn">Login</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup
