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
    const [imageDialog, setImageDialog] = React.useState(false);
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

    const handleImageClick = (e) => {
    
        const imageSrc = e.target.src;
        setImageDialog(imageSrc);
        // Assuming product is a state variable, you would update it here
        // setProductDetails(prev => ({ ...prev, selectedImage: imageSrc }));

    }

    const handleImageDialogClose = () => {
        setImageDialog(false);
        // Assuming product is a state variable, you would update it here
        // setProductDetails(prev => ({ ...prev, selectedImage: null }));
    }

    const handleImageDelete = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this image?");
        if (confirmDelete) {
            // Assuming product is a state variable, you would update it here
            setProductDetails(prev => ({
                ...prev,
                images: prev.images.filter(image => image !== imageDialog)
            }));
            setImageDialog(false);
        }

        // i just wanted to know whether the product details are edited or not. how to do that?
        // You can set a state variable to track if the product details have been edited
        
    }
    
    return (
        <div className="ManageProduct">
            
            <Dialog open={open} maxWidth="lg" fullWidth={true} onClose={handleClose} className="ManageProductDialog">


                <h2 className="ManageProductDialogHead">Edit Product</h2>

                <div className="ManageProductDialogContainer">

                    <div className="ManageProductDialogContainerImages">
                        {
                            productDetails?.images?.map((image, index) => (
                                <div key={index} className="ManageProductDialogContainerImagesMainEachImage" onClick={handleImageClick}>
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
                        
                        <div className="ManageProductDialogContainerDetailsActions">

                            <label className="ManageProductDialogContainerDetailsLabel">Name of the product</label>
                            <input type="text" name="text" value={product?.name} />
                        </div>
                        {/* <br /> */}
                        <div className="ManageProductDialogContainerDetailsActions">
                        <label className="ManageProductDialogContainerDetailsLabel">Description of the product</label>
                        <input type="text" name="text" value={product?.description} />
                        </div>
                        {/* <br /> */}
                        <div className="ManageProductDialogContainerDetailsActions">
                            <label className="ManageProductDialogContainerDetailsLabel">Category of the product</label>
                            <input type="text" name="text" value={product?.category} />
                        </div>
                        {/* <br /> */}
                        <div className="ManageProductDialogContainerDetailsActions">
                            <label className="ManageProductDialogContainerDetailsLabel">Price of the product</label>
                            <input type="text" name="text" value={product?.finalPrice} />
                        </div>

                    </div>

                </div>

                {
                    <Dialog open={imageDialog} onClose={handleImageDialogClose} maxWidth="md" className="ManageProductDialogImageDialog">
                    
                        <div className="ManageProductDialogImageDialogContainer">
                        
                            <div className="ManageProductDialogImageDialogContainerImage">
                                <img src={imageDialog} alt="Product" />
                            </div>

                            <div className="ManageProductDialogImageDialogContainerBtn" onClick={handleImageDelete}>
                                Delete
                            </div>

                        </div>

                    </Dialog>
                }

                <div className="ManageProductDialogBtn">
                    Submit
                </div>

            </Dialog>
            

        </div>

    );
}

export default ManageProducts;