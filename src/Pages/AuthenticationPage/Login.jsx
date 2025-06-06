
import React, { useState } from "react";
import "./AuthenticationPage.css";

const Login = ({ handleRegister }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleData = async () => {

        // Login through server
        await fetch('http://localhost:5000/userlogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        }).then((res) => {
            console.log(res.json());
            return res.json();
        });

    }

    const handleSubmit = async () => {
        
        if(email.length > 0 && password.length > 0){

            const res = await handleData();
            console.log(res);
            if(res){

                // SUCCESS IN LOGIN ACCOUNT

            }else{
                
                // ERROR LOGIN ACCOUNT
                

            }


        }

    }

    const handleLogin = () => {
        
        // CHANGE TO REGISTER PAGE
        handleRegister();
    }

    return (
        <div className="Login">
            <div className="LoginFlex">

                <h1 className="LoginHead">Login</h1>
                <input className="inputLogin" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input className="inputLogin" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button className="LoginButton" onClick={handleSubmit}>Login</button>
                <div className="LoginOptions">
                    <p className="CreateAccount" onClick={handleLogin}>Create Account</p>
                </div>  
            </div>
        </div>
    );
}

export default Login;