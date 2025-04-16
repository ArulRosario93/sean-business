
import React from "react";
import "./AuthenticationPage.css";

const Register = ({ handleLogin }) => {

    const handleRegister = () => {
        handleLogin();
    }

    return (
        <div className="Register">
            
            <div className="RegisterFlex">
                <h1 className="RegisterHead">Register</h1>
                <input className="inputRegister" type="text" placeholder="Username" />
                <input className="inputRegister" type="email" placeholder="Email" />
                <input className="inputRegister" type="password" placeholder="Password" />
                <input className="inputRegister" type="password" placeholder="Confirm Password" />
                <button className="RegisterButton">Register</button>
                <div className="RegisterOptions">
                    <p className="AlreadyAccount" onClick={handleRegister}>Already have an account? Login</p>
                </div>
            </div>
        </div>
    );
}

export default Register;