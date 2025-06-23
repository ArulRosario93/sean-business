import React from "react";

const AdminSearch = ({ searchValue, setSearchValue, handleAdminSearch, text, openCreateProdduct }) => {
    return (
            <div className="AdminPageManageProductsSearch">
                <input 
                    type="text" 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder={"Search " + text}
                    autoFocus
                    className="AdminPageManageProductsSearchInput"
                />
                <button className="AdminPageManageProductsSearchButton" onClick={handleAdminSearch}>Search</button>

                {

                    text === "Product" ?
                    <div className="AdminPageManageProductsSearchCreateProduct" onClick={openCreateProdduct}>
                        <p className="AdminPageManageProductsSearchCreateProductText">Create New Product</p>
                    </div> : null
                }
            </div>
    );
}

export default AdminSearch;