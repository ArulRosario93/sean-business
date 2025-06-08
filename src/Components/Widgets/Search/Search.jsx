import React from "react";
import SearchedProduct from "./SearchedProduct/SearchedProduct.jsx";
import "./Search.css";

const Search = () => {

    const handleSearch = () => {
        // Implement search functionality here
        console.log("Search button clicked");
    }

    const searchedPro = [1, 2];

    return (
        <>
            <div className="Search">

                <input type="text" name="search" placeholder="Search a product" id="" />
                <button onClick={handleSearch}>Search</button>



            </div>

            {/* DO THE SEARCH PRODUCT NEXT */}
            <div className="SearchedProductsList">
                {
                    searchedPro.map((item, i) => {
                        return <SearchedProduct item={item} />
                    })
                }
            </div>
        </>
    );
};

export default Search;