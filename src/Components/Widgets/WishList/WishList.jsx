
import React, { useEffect, useState } from "react";
import { Drawer } from "@mui/material";
import "./WishList.css";
import WishListItem from "./WIshListItem/WishListItem";

const WishList = ({anchor, onClose, items}) => {

    // const [WishList, setWishList] = useState([]);

    // const handleWishList = () => {
    //     const data = localStorage.getItem('wishlist');

    //     setWishList(data);
    // }

    // useEffect(() => {
    //     handleWishList();
    // }, []);

    return (
        <div className="WishList">

                <Drawer className="WishListDrawer" aria-setsize={'lg'} anchor="right" open={anchor} onClose={onClose}>

                    <div className="WishListHeader">
                        <h2>Wish List</h2>
                    </div>

                    <br />
                    {
                        items && items.length > 0 ? (
                            items.map((item, index) => (
                                <WishListItem key={index} item={item} />
                            ))
                        ) : (
                            <p className="WishListEmpty">Your wish list is empty.</p>
                        )
                    }
                    <br />


                    <div className="WishListFooter">

                        Checkout


                    </div>
                </Drawer>


        </div>
    )
}

export default WishList;