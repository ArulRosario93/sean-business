
import React, { useEffect, useState } from "react";
import { Drawer } from "@mui/material";
import "./WishList.css";
import WishListItem from "./WIshListItem/WishListItem";

const WishList = ({anchor, onClose}) => {

    const [WishList, setWishList] = useState([]);

    const handleWishList = () => {
        const data = localStorage.getItem('wishlist');

        setWishList(data);
    }

    useEffect(() => {
        handleWishList();
    }, []);

    return (
        <div className="WishList">

                <Drawer className="WishListDrawer" aria-setsize={'lg'} anchor="right" open={anchor} onClose={onClose}>

                    <div className="WishListHeader">
                        <h2>Wish List</h2>
                    </div>

                    <br />
                    <WishListItem />
                    <br />


                    <div className="WishListFooter">

                        checkout

                    </div>
                </Drawer>


        </div>
    )
}

export default WishList;