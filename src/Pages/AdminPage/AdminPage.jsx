import React, { use, useEffect } from "react";
import "./AdminPage.css";
import { Dialog } from "@mui/material";
import ManageProducts from "./ManageProduct/ManageProduct";
import EditIcon from '@mui/icons-material/Edit';

const product = {
    name: "Golden Oversized",
    finalPrice: 100,
    secondaryPrice: 150,
    discount: 50,
    images: ["https://img.ltwebstatic.com/images3_pi/2024/08/29/66/1724920888e922701552ba133a6498148d393a310d_thumbnail_405x.webp", "https://img.ltwebstatic.com/images3_pi/2024/08/29/db/172492089180304768be35713ea3408c702cc1775c_thumbnail_560x.webp"],
    category: "Oversized",
    subCategory: "T-Shirts",
    brand: "Brand Name",
    description: "This is a golden oversized t-shirt.",
    reviews: [
        {
            "name": "John Doe",
            "rating": 4.5,
            "comment": "Great product! Very comfortable and stylish.",
            "date": "2024-08-29"
        },
        {
            "name": "Jane Smith",
            "rating": 5,
            "comment": "Absolutely love this t-shirt! The quality is amazing.",
            "date": "2024-08-30"
        },
        {
            "name": "Alice Johnson",
            "rating": 4,
            "comment": "Good value for money. The fit is perfect.",
            "date": "2024-08-31"
        },
        {
            "name": "Bob Brown",
            "rating": 3.5,
            "comment": "Decent quality, but the color is not as expected.",
            "date": "2024-09-01"
        }
    ]
};

const AdminPage = () => {

    const [password, setPassword] = React.useState("");
    const [isAdmin, setIsAdmin] = React.useState(true);
    const [openProduct, setOpenProduct] = React.useState(false);

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

    const handleEditProduct = () => {
        
        setOpenProduct(true);
    
    }

    const handleEditProductClose = () => {
        setOpenProduct(false);
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

            <div className="ManageProductSingleContainer">

                <div className="ManageProductContainerImage">
                    <img src="" alt="" srcset="" />
                </div>
                <div className="ManageProductContainerContent">
                    <div className="ManageProductContainerContentName">
                        <p className="ManageProductContainerContentNameHead">Head</p>
                        <p className="ManageProductContainerContentNameDes">Descritption</p>
                    </div>
                </div>
                <div className="ManageProductContainerContentPrice">

                    <p>Rs. 100</p>

                </div>
                <div className="ManageProductContainerEdit" onClick={handleEditProduct}>
                    <EditIcon />
                </div>

            </div>

            {
                openProduct ?
                <ManageProducts product={product} closeIt={handleEditProductClose} />   
                : null
            }

        </div>
    );
}

export default AdminPage;