import React from "react";
import "./SearchedProduct.css";

const SearchedProduct = ({ item }) => {

    return (
        <div className="SearchedProduct">

            {/* Image Area */}
            <div className="SearchedProductImage">
                <img src="https://cowboycoffee.com/wp-content/uploads/2024/10/Cowboy-Coffee-Tshirt-Brown332.jpg" alt="" srcset="" />
            </div>

            {/* Product Content */}
            <div className="SearchedProductContent">

                <p className="SearchedProductContentName">Item Name</p>
                <p className="SearchedProductContentSubName">Item Sub Name</p>
                <p className="SearchedProductContentDescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius corrupti autem, nemo accusamus est..</p>

            </div>

        </div>
    )
}

export default SearchedProduct;