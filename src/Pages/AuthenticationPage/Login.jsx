
import React from "react";
import "./AuthenticationPage.css";

const Login = ({ handleRegister }) => {

    const handleLogin = () => {
        handleRegister();
    }

    return (
        <div className="Login">
            <div className="LoginFlex">

                <h1 className="LoginHead">Login</h1>
                <input className="inputLogin" type="email" placeholder="Email" />
                <input className="inputLogin" type="password" placeholder="Password" />
                <button className="LoginButton">Login</button>
                <div className="LoginOptions">
                    <p className="CreateAccount" onClick={handleLogin}>Create Account</p>
                </div>  
            </div>
        </div>
    );
}

export default Login;