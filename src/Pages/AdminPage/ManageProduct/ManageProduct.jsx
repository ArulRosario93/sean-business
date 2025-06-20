import React from "react";
import "./ManageProduct.css";
import { Dialog } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ShareIcon from '@mui/icons-material/Share';
import Divider from "../../../Components/Widgets/Divider/Divider";
import ExpandContainer from "../../../Components/Widgets/ExpandContainer/ExpandContainer";

const ManageProducts = ({ product, closeIt }) => {

    const [open, setOpen] = React.useState(true);
    const [productDetails, setProductDetails] = React.useState(product);


    const handleClose = () => {
        setOpen(false);
        closeIt();
    }

    const handleaddImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                // Assuming product is a state variable, you would update it here
                // setProduct(prev => ({ ...prev, images: [...prev.images, reader.result] }));
            };
            reader.readAsDataURL(file);
        }
    }

    const handleAddImageLink = () => {
        const imageLink = prompt("Enter the image link:");
        if (imageLink) {
            // Assuming product is a state variable, you would update it here
            setProductDetails(prev => ({ ...prev, images: [...prev.images, imageLink] }));
        }
    }

    return (
        <div className="ManageProduct">
            
            <Dialog open={open} maxWidth="lg" fullWidth={true} onClose={handleClose} className="ManageProductDialog">


                <h2 className="ManageProductDialogHead">Edit Product</h2>

                <div className="ManageProductDialogContainer">

                    <div className="ManageProductDialogContainerImages">
                        {
                            productDetails?.images?.map((image, index) => (
                                <div key={index} className="ManageProductDialogContainerImagesMainEachImage">
                                    <img src={image} alt="Oversized" srcset="" />
                                </div>
                            ))
                        }

                        <div className="ManageProductDialogContainerImagesMain" onClick={handleAddImageLink}>
                            <input type="btn" id="file" style={{display: 'none'}}/>
                            <label htmlFor="file">+</label>
                        </div>
                    </div>
                    
                    <div className="ManageProductDialogContainerDetails">

                        <label className="ManageProductDialogContainerDetailsLabel">Name of the product</label>
                        <input type="text" name="text" value={product?.name} />
                        <br />
                        <label className="ManageProductDialogContainerDetailsLabel">Description of the product</label>
                        <input type="text" name="text" value={product?.description} />

                    </div>

                </div>

            </Dialog>

        </div>

    );
}

export default ManageProducts;