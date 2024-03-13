import React, {useContext} from 'react'
import userContext from '../context/context'
import { useState } from 'react';

const Login = () => {
    // here dun,dpw is for extra functionality of button onclick after click on button welcome message will print 
    const [dun, setdun] = useState("");  
    const [dpw, setdpw] = useState("");
    
    const value = useContext(userContext);
    const handleClick=(e)=>{
        e.preventDefault();
        value.setusername(dun);
        value.setpassword(dpw);
    }
  return (
    <>
    <h1>Login</h1>
    <input type="text" placeholder='username' value={value.username} onChange={(e)=>setdun(e.target.value)} />
    <input type="text" placeholder='password' value={value.password} onChange={(e)=>setdpw(e.target.value)}/>
    <button onClick={handleClick}> submit</button>
    </>
  )
}

export default Login