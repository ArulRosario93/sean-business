
import React from "react";
import "./NavBar.css";
// import { SearchIcon, PersonOutlineIcon, FavoriteBorderIcon, WorkOutlineIcon } from '@mui/icons-material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SearchIcon from '@mui/icons-material/Search';

const NavBar = () => {
    return (
        <div className="NavBarContainer">
            <div className="NavBar">
                <div className="NavBarContent">
                    <div className="NavBarContentLogo">
                        <img className="NavBarContentLogoImg" src="https://imgs.search.brave.com/nG1XXrjBGwj_rWKgiJkqEsDlf4PbjUpJ0kzu9eRx4Ag/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvRnJl/ZVBob3Rvcy9GcmVl/LVBob3RvLTc0MHg0/OTItMTc0NDkxNTMz/My5qcGc" alt="Logo" />
                    </div>
                    <div className="NavBarContentSearch">
                        <p>Men</p>
                        <p>Women</p>
                        <p>OverSized T-Shirts</p>
                        <p>Summer'25</p>
                        <p>Clearence Sale</p>
                    </div>
                    <div className="NavBarContentAccounts">
                        
                        <div className="NavBarContentAccountsSearch">
                            <SearchIcon />
                        </div>
                        <div className="NavBarContentAccountsAccount">
                            <PersonOutlineIcon />
                        </div>
                        <div className="NavBarContentAccountsWishlist">
                            <FavoriteBorderIcon />
                        </div>
                        <div className="NavBarContentAccountsCart">
                            <WorkOutlineIcon />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;