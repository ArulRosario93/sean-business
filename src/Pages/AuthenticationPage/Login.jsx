
import React, { useState } from "react";
import "./AuthenticationPage.css";

const Login = ({ handleRegister }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleData = async () => {

        // Login through server
        return fetch('http://localhost:5000/userlogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            return data;
        });
    }

    const handleSubmit = async () => {

        if(email.length > 0 && password.length > 0){

            const res = await handleData();
            if(res === true){

                // SUCCESS IN LOGIN ACCOUNT

            }else{

                // ERROR LOGIN ACCOUNT


            }

        }else{

            // ALERT USER TO ENTER EMAIL AND PASSWORD

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
                {/* <form> */}
                    <input className="inputLogin" id="loginName" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <input className="inputLogin" id="loginPassword" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    <button className="LoginButton" onClick={handleSubmit}>Login</button>
                {/* </form> */}
                <div className="LoginOptions">
                    <p className="CreateAccount" onClick={handleLogin}>Create Account</p>
                </div>  
            </div>
        </div>
    );
}

export default Login;