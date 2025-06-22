import React, { use, useEffect } from "react";
import "./AdminPage.css";
import { Dialog } from "@mui/material";
import AdminMethods from "./AdminMethods/AdminMethods";
import ManageProducts from "./ManageProduct/ManageProduct";
import EditIcon from '@mui/icons-material/Edit';
import ManageProductSingleContainer from "./ManageProduct/ManageProductSingleContainer";
import AdminSearch from "./ManageProduct/ManageProductSearch";
import AuthenticationPage from "../AuthenticationPage/AuthenticationPage";

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
    const [openProductEdit, setOpenProductEdit] = React.useState();
    const [openOrder, setOpenOrder] = React.useState(false);
    const [openUser, setOpenUser] = React.useState(false);
    const [openReport, setOpenReport] = React.useState(false);

    const [showLogin, setShowLogin] = React.useState(false);

    const [dialogOpen, setDialogOpen] = React.useState(true);
    const [seletedAction, setSelectedAction] = React.useState("Manage Products");
    const [searchValue, setSearchValue] = React.useState("");
    const [orderSearchValue, setOrderSearchValue] = React.useState("");
    const [userSearchValue, setUserSearchValue] = React.useState("");

    // Products, Orders, Users
    const [AdminProductList, setAdminProductList] = React.useState([]);
    const [AdminOrderList, setAdminOrderList] = React.useState([]);
    const [AdminUserList, setAdminUserList] = React.useState([]);

    const [actionList, setActionList] = React.useState([
        "Manage Products",
        "Manage Orders",
        "Manage Users",
        "View Reports"
    ]);


    const handleChangeAction = (action) => {
        setSelectedAction(action);
        setSearchValue("");
        setOrderSearchValue("");
        setUserSearchValue("");
    }


    const handleAdminLogin = async () => {

       await AdminMethods.handleAdminLogin(password, setPassword, setIsAdmin);
    
    }

    const handleAdminClose = () => {
        setDialogOpen(false);

        // navigate to home page
        window.location.href = "/";
    }


    const handleAdminSearchProduct = async () => {
        if (isAdmin) {
            const data = await AdminMethods.handleAdminSearchProduct(setShowLogin);
            
            if(data?.error == null){
                setAdminProductList(data);
            }else{
                alert(`Error ${data?.error}. Please try again later.`);
            }
        }
    }
    
    
    const handleAdminSearchProductByName = async () => {
        if (isAdmin) {

            const data = await AdminMethods.handleAdminSearchProductByName(searchValue, setShowLogin);
            if(data?.error == null){
                console.log(data);
                setAdminProductList(data);
            } else {
                alert(`Error ${data?.error}. Please try again later.`);
            }
        }
    }

    const handleAdminSearchOrder = async () => {
        if (isAdmin) {
        
            const data = await AdminMethods.handleAdminSearchOrderByID(setShowLogin);

            if(data?.error == null){
                setAdminOrderList(data);
            } else {
                alert(`Error ${data?.error}. Please try again later.`);
            }
            
        }
    }

    const handleAdminSearchOrderByID = async () => {
        if(isAdmin){

            const data = await AdminMethods.handleAdminSearchOrderByID(orderSearchValue, setShowLogin);
            if(data?.error == null){
                setAdminOrderList(data);
            } else {
                alert(`Error ${data?.error}. Please try again later.`);
            }

        }
    }

    const handleAdminSearchUser = async () => {
        if (isAdmin) {
        
            const userName = `${userSearchValue}`.trim();

            await fetch('http://localhost:5000/admin/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userName }),
            })
            .then((response) => response.json())
            .then((data) => {
                
                console.log(data);

                if(data?.error == "failed to login") {
                    alert("You might be Admin but Please Login to Continue");
                    setShowLogin(true);
                }

            })

        }
    }

    const handleEditProduct = (product) => {
        
        setOpenProduct(true);
        setOpenProductEdit(product);
    
    }

    const handleEditProductClose = () => {
        setOpenProduct(false);
    }

    useEffect(() => {
        if (isAdmin) {
            setDialogOpen(false);
            handleAdminSearchProduct();
        } else {
            setDialogOpen(true);
        }

    }, []);

    return (
        <div className="AdminPageContainer">
            <h1 className="AdminPageTitle">Admin Page</h1>

            <div className="AdminPageActions">

                {
                    isAdmin ? actionList.map((action, index) => (
                        <button 
                            key={index} 
                            className={`${seletedAction === action ? "AdminPageButtonSelected" : ""} AdminPageButton`} 
                            onClick={() => handleChangeAction(action)}
                        >
                            {action}
                        </button>
                    )) : null
                }

            </div>
                {
                    isAdmin ? 
                    
                    seletedAction == "Manage Products" ? 
                        <AdminSearch text="Product" searchValue={searchValue} setSearchValue={setSearchValue} handleAdminSearch={handleAdminSearchProductByName} /> :
                    seletedAction === "Manage Orders" ?
                        <AdminSearch text="Order ID" searchValue={orderSearchValue} setSearchValue={setOrderSearchValue} handleAdminSearch={handleAdminSearchOrderByID} /> :
                    seletedAction === "Manage Users" ?
                        <AdminSearch text="User" searchValue={userSearchValue} setSearchValue={setUserSearchValue} handleAdminSearch={handleAdminSearchUser} /> :
                    seletedAction === "View Reports" ?
                        <p>View Reports Section</p>
                    
                    : null : null
                }

            {/* <Dialog open={isAdmin} maxWidth="md" fullWidth={true} fullheight={true}> 
            
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

            </Dialog> */}

            {
                isAdmin ? seletedAction === "Manage Products" ? <ManageProductSingleContainer product={AdminProductList} handleEditProduct={handleEditProduct} />: 
                seletedAction === "Manage Orders" ? <p>Manage Orders Section</p> :
                seletedAction === "Manage Users" ? <p>Manage Users Section</p> :
                seletedAction === "View Reports" ? <p>View Reports Section</p> :
                null : null
            }

            {
                openProduct ?
                    <ManageProducts product={openProductEdit} closeIt={handleEditProductClose} /> : null
            }

            {
                showLogin ? <AuthenticationPage /> : null
            }

        </div>
    );
}

export default AdminPage;