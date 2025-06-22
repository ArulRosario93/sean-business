import React from "react";
import EditIcon from '@mui/icons-material/Edit';

const ManageProductSingleContainer = ({ product, handleEditProduct }) => {
    return (
        product.map(
            (item, index) => (

                <div className="ManageProductSingleContainer" key={index}>

                    <div className="ManageProductContainerImage">
                        <img src={item?.images?.[0]} alt="" srcset="" />
                    </div>
                    <div className="ManageProductContainerContent">
                        <div className="ManageProductContainerContentName">
                            <p className="ManageProductContainerContentNameHead">{item?.name}</p>
                            <p className="ManageProductContainerContentNameDes">{item?.description}</p>
                        </div>
                    </div>
                    <div className="ManageProductContainerContentPrice">

                        <p>Rs. {item?.finalPrice}</p>

                    </div>
                    <div className="ManageProductContainerEdit" onClick={() => handleEditProduct(item)}>
                        <EditIcon />
                    </div>

                </div>
            )
        ) 
    );
}

export default ManageProductSingleContainer;