import React, { use, useEffect } from "react";
import "./AdminPage.css";
import { Dialog } from "@mui/material";
import AdminMethods from "./AdminMethods/AdminMethods";
import ManageProducts from "./ManageProduct/ManageProduct";
import ManageProductSingleContainer from "./ManageProduct/ManageProductSingleContainer";
import AdminSearch from "./ManageProduct/ManageProductSearch";
import AuthenticationPage from "../AuthenticationPage/AuthenticationPage";
import OrderList from "./OrderList/OrderList";
import CreateProduct from "./CreateProduct/CreateProduct";

const orderList = [
    {
        orderID: "12345",
        userName: "John Doe",
        product: [
            { productID: "1", productName: "Product 1", quantity: 2, discount: 50, secondaryPrice: 1999, finalPrice: 50.00, color: { name: 'Red', rgba: 'red' } },
        ],
        feedback: {
            star: 5,
            comment: "Great product!"
        },
        orderedOn: "2023-10-01",
        totalAmount: 100.00,
        status: "Delivered",
        deliveredOn: "2023-10-02"
    }
];

const AdminPage = () => {

    const [password, setPassword] = React.useState("");
    const [isAdmin, setIsAdmin] = React.useState(false);

    const [openProduct, setOpenProduct] = React.useState(false);
    const [openProductEdit, setOpenProductEdit] = React.useState();
    const [openOrder, setOpenOrder] = React.useState(false);
    const [openUser, setOpenUser] = React.useState(false);
    const [openReport, setOpenReport] = React.useState(false);

    const [showLogin, setShowLogin] = React.useState(false);

    const [createProduct, setCreateProduct] = React.useState(false);

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

    const handleOpenCreateProduct = () => {
        setCreateProduct(true);
    }

    const handleCloseCreateProduct = () => {
        setCreateProduct(false);
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
                        <AdminSearch text="Product" openCreateProdduct={handleOpenCreateProduct} searchValue={searchValue} setSearchValue={setSearchValue} handleAdminSearch={handleAdminSearchProductByName} /> :
                    seletedAction === "Manage Orders" ?
                        <AdminSearch text="Order ID" searchValue={orderSearchValue} setSearchValue={setOrderSearchValue} handleAdminSearch={handleAdminSearchOrderByID} /> :
                    seletedAction === "Manage Users" ?
                        <AdminSearch text="User" searchValue={userSearchValue} setSearchValue={setUserSearchValue} handleAdminSearch={handleAdminSearchUser} /> :
                    seletedAction === "View Reports" ?
                        <p>View Reports Section</p>
                    
                    : null : null
                }

            <Dialog open={!isAdmin} maxWidth="md" fullWidth={true} fullheight={true}> 
            
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

            {
                isAdmin ? seletedAction === "Manage Products" ? <ManageProductSingleContainer product={AdminProductList} handleEditProduct={handleEditProduct} />: 
                seletedAction === "Manage Orders" ? <OrderList /> :
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

            {
                createProduct ? <CreateProduct closeIt={handleCloseCreateProduct} /> : null
            }



        </div>
    );
}

export default AdminPage;