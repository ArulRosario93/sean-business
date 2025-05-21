import React, { use, useEffect } from "react";
import "./AdminPage.css";
import { Dialog } from "@mui/material";

const product = {
    name: "Golden Oversized",
    finalPrice: 100,
    secondaryPrice: 150,
    discount: 50,
    image: "https://example.com/image.jpg",
    category: "Oversized",
    subCategory: "T-Shirts",
    brand: "Brand Name",
    description: "This is a golden oversized t-shirt.",
}

const AdminPage = () => {

    const [password, setPassword] = React.useState("");
    const [isAdmin, setIsAdmin] = React.useState(true);

    const [dialogOpen, setDialogOpen] = React.useState(true);
    const [seletedAction, setSelectedAction] = React.useState("Manage Products");
    const [searchValue, setSearchValue] = React.useState("");
    const [actionList, setActionList] = React.useState([
        "Manage Products",
        "Manage Orders",
        "Manage Users",
        "View Reports"
    ]);

    const handleAdminLogin = async () => {

        await fetch('http://localhost:5000/admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                setIsAdmin(true);
            } else {
                alert("Invalid password");
                setPassword("");
            }
        })
    }

    const handleAdminClose = () => {
        setDialogOpen(false);

        // navigate to home page
        window.location.href = "/";
    }

    const handleAdminSearchProduct = async () => {

        if (isAdmin) {
        
            const name = `${searchValue}`.trim();

            await fetch('http://localhost:5000/admin/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name }),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })

        }

    }

    useEffect(() => {

        if (isAdmin) {
            setDialogOpen(false);
        } else {
            setDialogOpen(true);
        }

    }, [isAdmin]);

    return (
        <div className="AdminPageContainer">
            <h1 className="AdminPageTitle">Admin Page</h1>

            <div className="AdminPageActions">

                {
                    actionList.map((action, index) => (
                        <button 
                            key={index} 
                            className={`${seletedAction === action ? "AdminPageButtonSelected" : ""} AdminPageButton`} 
                            onClick={() => {
                                setSelectedAction(action);
                                handleAdminRequest();
                            }}
                        >
                            {action}
                        </button>
                    ))
                }

            </div>
                {
                    isAdmin ? seletedAction == "Manage Products" ? 
                    
                        <div className="AdminPageManageProductsSearch">
                            <input 
                                type="text" 
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                placeholder="Search Products" 
                                className="AdminPageManageProductsSearchInput"
                            />
                            <button className="AdminPageManageProductsSearchButton" onClick={handleAdminSearchProduct}>Search</button>
                        </div>

                    : null : null
                }

            <Dialog open={false} maxWidth="md" fullWidth={true} fullheight={true}> 
            
                <div className="AdminPageDialogContainer">
                    <h2 className="AdminPageDialogTitle">Admin Login</h2>
                    <input 
                        type="password" 
                        placeholder="Enter Admin Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="AdminPageDialogInput"
                    />
                    <div className="AdminPageDialogActions">
                        <button className="AdminPageDialogButtonCancel" onClick={handleAdminClose}>Cancel</button>
                        <button className="AdminPageDialogButtonLogin" onClick={handleAdminLogin}>Login</button>
                    </div>
                </div>

            </Dialog>       

        </div>
    );
}

export default AdminPage;