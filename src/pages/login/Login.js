import React from 'react'
import './login.css'

export const Login = () => {
  return (
    <section class="login-area">
    <div class="login-container">
         <h2 >Login</h2>
         <div class="email-input">
             <p>Email address</p>
             <input type="text" class="input-box"/>
         </div>
         <div class="password-input">
             <p>Password</p>
             <input type="password" class="input-box"/>
         </div>
         <div class="checkbox-input">
            <input type="checkbox"/> Remember me
            <a href="" class="forget-password">Forget Your Password</a>
        </div>
        <div class="login-link">
            <a href="#">Login</a>
        </div>
        <a href="/Quickstore/pages/signup.html">Create New Account </a>
    </div>
</section>
  )
}
