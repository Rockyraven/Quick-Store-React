import { useAuth } from 'context/AuthContext';
import React, { useState } from 'react'
import './login.css'

export const Login = () => {

    function setGuestCredential(event) {
        event.preventDefault();
        setEmail("adarshbalika@gmail.com");
        setPassword("adarshbalika");
      }

    const { loginUser } = useAuth();

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const loginButton = ({event,email, password}) => {
        event.preventDefault();
        loginUser( {email, password});
    }

  return (
    <section class="login-area">
    <div class="login-container">
         <h2 >Login</h2>
         <div class="email-input">
            <p>Email address</p>
            <input
                 type="email"
                 className="input-box"
                 name="email"
                 id='email'
                 required
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
            />
         </div>
         <div class="password-input">
             <p>Password</p>
             <input
              type="password"
              className="input-box"
              id="password"
              required
              value={password}
              onChange = {(e) => setPassword(e.target.value)} 
              />
         </div>
         <div class="checkbox-input">
            <input type="checkbox" name='remember'/> 
            <label htmlFor="remember">Remember me</label>
            <a href="" className="forget-password">Forget Your Password</a>
        </div>
        <input
            className='login-link'
            type="submit"
            value="Login"
            onClick = {(event) => loginButton({event, email, password})} 
        />
         <button
         className='login-link'
          onClick={(e) => setGuestCredential(e)}
        >
          Use guest credentials
        </button>
        
        <a href="/Quickstore/pages/signup.html">Create New Account </a>
    </div>
</section>
  )
}
