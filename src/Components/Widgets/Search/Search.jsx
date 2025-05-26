import React from "react";
import "./Search.css";

const Search = () => {

    const handleSearch = () => {
        // Implement search functionality here
        console.log("Search button clicked");
    }

    return (
        <div className="Search">

            <input type="text" name="search" placeholder="Search a product" id="" />
            <button onClick={handleSearch}>Search</button>


            {/* DO THE SEARCH PRODUCT NEXT */}

        </div>
    );
};

export default Search;