import React from "react";
import "./AuthenticationPage.css";
import Login from "./Login";
import Register from "./Register";
import { Dialog } from "@mui/material";

const AuthenticationPage = () => {

    const [openDialog, setOpenDialog] = React.useState(true);
    const [isLogin, setIsLogin] = React.useState(true);

    const handleLogin = () => {
        setIsLogin(true);
    }

    const handleRegister = () => {
        setIsLogin(false);
    }

    const handleClose = () => {
        setOpenDialog(false);
    }

    return (

            <Dialog open={openDialog} onClose={handleClose} maxWidth="md" fullWidth={true}>
            
                <div className="AuthenticationPageContainer">
                
                    
                    {
                        isLogin ? <Login handleRegister={handleRegister} /> : <Register handleLogin={handleLogin} />
                    }
                    

                </div>
            </Dialog>
    );
}

export default AuthenticationPage;