import React, { useState } from "react";
import "./loginform.css"

   const LoginForm = () => {
    const [popupstyle, showpopup]  = useState ("hide")

    const popup = () => {
        showpopup ("login-popup")
        setTimeout(() => showpopup("hide"), 3000)
    }
       return (
        <div className="Cover">
            <h1>Login</h1>
            <input  type ="text" placeholder="username" />
            <input  type ="password" placeholder="password" />

            <div className="login-btn" onClick={popup}>Login</div>

            <p className="text">Or login using</p>

            <div className="alt-login">
               <div className="facebook"></div>
               <div className="google"></div>
            </div>

            <div className={popupstyle}>
                <h3>LoginForm</h3>
                <p>username or password inocrrect</p>
            </div>

        </div>
       )
   }
  
  export default LoginForm
