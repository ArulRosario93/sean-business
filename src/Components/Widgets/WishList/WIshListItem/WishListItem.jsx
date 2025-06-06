import React from "react";
import "./WishListItem.css"

const WishListItem = () => {
    return (
        <div className="WishListItem">
            
            <div className="WishListItemContainer">
                {/* Image of the product */}
                <div className="WishListItemImage">
                    <img src="" alt="" srcset="" />
                </div>

                {/* Content of the product */}
                <div className="WishListItemContent">

                    {/* name of the product */}
                    <h3>Gost 13</h3>
                    <p>Goal GOal Goall</p>
                    <p><b>Size:</b> L</p>
                    <p><b>Quantity: </b>1</p>

                </div>
            </div>

            <div className="WishListItemPrice">

                <h3>$140.00</h3>

            </div>
        </div>
    )
}

export default WishListItem;