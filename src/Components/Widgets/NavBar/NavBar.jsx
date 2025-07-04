
import React, { useEffect, useState } from "react";
import "./NavBar.css";
// import { SearchIcon, PersonOutlineIcon, FavoriteBorderIcon, WorkOutlineIcon } from '@mui/icons-material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SearchIcon from '@mui/icons-material/Search';
import Search from "../Search/Search";
import CloseIcon from '@mui/icons-material/Close';
import WishList from "../WishList/WishList";

const NavBar = ({ cart, wishList }) => {

    const [wishlistAnchor, setWishListAnchor] = useState(false);
    const [search, setSearch] = useState(false);
    const [shop, setShop] = useState(false);

    const handleSearch = () => {
        // Implement search functionality here
        setSearch(!search);
    }

    const handleShopHovered = () => {
        setShop(true);
    }

    const handleShopHoverLeft = () => {
        setShop(false);
    }

    // Show up WishList in right
    const handleWishListOpen = () =>{
        setWishListAnchor(true);
    }

    // Close up Wishlist in left
    const handleWishListClose = () => {
        setWishListAnchor(false);
    }

    console.log(cart);
    console.log(wishList);
    

    return (
        <div className="NavBarContainer">
            <div className="NavBar">
                <div className="NavBarContent">
                    <div className="NavBarContentLogo">
                        <img className="NavBarContentLogoImg" src="https://imgs.search.brave.com/nG1XXrjBGwj_rWKgiJkqEsDlf4PbjUpJ0kzu9eRx4Ag/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvRnJl/ZVBob3Rvcy9GcmVl/LVBob3RvLTc0MHg0/OTItMTc0NDkxNTMz/My5qcGc" alt="Logo" />
                    </div>
                    <div className="NavBarContentSearch" onMouseLeave={handleShopHoverLeft}>
                        <div className="NavBarContentSearchInput">
                            <p className="NavBarContentSearchP" onMouseEnter={handleShopHovered}>Shop</p>
                            <p className="NavBarContentSearchP">About Us</p>
                            <p className="NavBarContentSearchP">Contact</p>
                            <p className="NavBarContentSearchP">FAQs</p>
                            <p className="NavBarContentSearchP">Contact</p>
                        </div>
                        {
                            search ? <Search /> : null
                        }
                        <div style={shop? {animationName: 'enterIn'}: {}} className="NavBarContentSearchShop">
                            <p>All Products</p>
                            <p>Motivational Tees</p>
                            <p>Sarcastic Tees</p>
                            <p>Offensive Tees</p>
                            <p>Best Sellers</p>
                            <p>New Arrival</p>
                        </div>
                    </div>
                    <div className="NavBarContentAccounts">
                        <div className="NavBarContentAccountsSearch" onClick={handleSearch}>
                            {
                                search ? <CloseIcon /> : <SearchIcon style={{ color: "black" }} />
                            }
                        </div>
                        <div className="NavBarContentAccountsWishList" onClick={handleWishListOpen}>
                            <FavoriteBorderIcon />
                            <div className="NavBarContentAccountsAccountWishListCount" style={wishList.length == 0 ? {display: 'none'}: {}}>
                                { wishList ? wishList.length : "" }
                            </div>
                        </div>
                        <div className="NavBarContentAccountsCart">
                            <WorkOutlineIcon />
                            <div className="NavBarContentAccountsAccountCartCount" style={cart.length == 0 ? {display: 'none'}: {}}>
                                { cart ? cart.length : "" }
                            </div>
                        </div>
                        <div className="NavBarContentAccountsAccount">
                            <PersonOutlineIcon />
                        </div>
                    </div>
                </div>
            </div>
            <WishList items={wishList} anchor={wishlistAnchor} onClose={handleWishListClose} />
        </div>
    );
}

export default NavBar;