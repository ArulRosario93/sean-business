import React from "react";
import "./WishListItem.css"

const WishListItem = ({ item }) => {
    return (
        <div className="WishListItem">
            
            <div className="WishListItemContainer">
                {/* Image of the product */}
                <div className="WishListItemImage">
                    <img src={item.image} alt="" srcset="" />
                </div>

                {/* Content of the product */}
                <div className="WishListItemContent">

                    {/* name of the product */}
                    <h3>{item.name}</h3>
                    <p>{item.name}</p>
                    <p><b>Size:</b> {item.size}</p>   
                    <p><b>Quantity: </b>{item.quantity}</p>

                </div>
            </div>

            <div className="WishListItemPrice">

                <h3>Rs. {item.price}</h3>

            </div>
        </div>
    )
}

export default WishListItem;