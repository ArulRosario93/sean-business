
import React, { useState } from "react";
import "./AuthenticationPage.css";
// import "dotenv/config"; // Ensure you have dotenv installed and configured

const Register = ({ handleLogin }) => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleData = async () => {

        // Login through server
        await fetch(`${import.meta.env.VITE_SERVER_URL}/userregister`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, name })
        }).then((res) => {
            console.log(res);
            return res.json();
        });

    }

    const handleSubmit = async () => {

       if(email.length > 0 && name.length > 0 && password.length > 0){

            if(password == confirmPassword){

                // HANDLE REGISTRATION
                const res = await handleData();
                console.log(res);
                if(res){

                    // SUCCESS IN REGISTRATION
                
                }else{

                    // ERROR IN REGISTRATION

                }

            }else{

                // PASSWORD AND CONFIRM PASSWORD ARE NOT SAME

            }

       }

    }

    const handleRegister = () => {
        handleLogin();
    }

    return (
        <div className="Register">
            
            <div className="RegisterFlex">
                <h1 className="RegisterHead">Register</h1>
                <input className="inputRegister" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Username" />
                <input className="inputRegister" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                <input className="inputRegister" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                <input className="inputRegister" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" />
                <button className="RegisterButton" onClick={handleSubmit}>Register</button>
                <div className="RegisterOptions">
                    <p className="AlreadyAccount" onClick={handleRegister}>Already have an account? Login</p>
                </div>
            </div>
        </div>
    );
}

export default Register;