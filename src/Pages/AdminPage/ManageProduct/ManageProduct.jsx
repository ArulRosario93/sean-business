import React from "react";
import "./ManageProduct.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { Dialog } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ShareIcon from '@mui/icons-material/Share';
import Divider from "../../../Components/Widgets/Divider/Divider";
import ExpandContainer from "../../../Components/Widgets/ExpandContainer/ExpandContainer";
import AdminMethods from "../AdminMethods/AdminMethods";

const ManageProducts = ({ product, closeIt }) => {

    const [open, setOpen] = React.useState(true);
    const [imageDialog, setImageDialog] = React.useState(false);
    const [productDetails, setProductDetails] = React.useState(product);

    const [name, setName] = React.useState(product?.name || "");
    const [description, setDescription] = React.useState(product?.description || "");
    const [finalPrice, setFinalPrice] = React.useState(product?.finalPrice || "");
    const [secondaryPrice, setSecondaryPrice] = React.useState(product?.secondaryPrice || "");
    const [discount, setDiscount] = React.useState(product?.discount || "");
    const [category, setCategory] = React.useState(product?.category);

    const [edited, setEdited] = React.useState(false);
    const [onSubmit, setOnSubmit] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
        closeIt();
    }

    const handleAddImageLink = () => {
        const imageLink = prompt("Enter the image link:");
        if (imageLink) {
            // Assuming product is a state variable, you would update it here
            setProductDetails(prev => ({ ...prev, images: [...prev.images, imageLink] }));
        }
        setEdited(true);
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
        setEdited(true);
    }

    const handleReviewDelete = (index) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this review?");

        if (confirmDelete) {
            // Assuming product is a state variable, you would update it here
            setProductDetails(prev => ({
                ...prev,
                reviews: prev.reviews.filter((_, i) => i !== index)
            }));
        }
        setEdited(true);
    }

    const handleChanged = () => {
        setEdited(true);
    }

    const handleChangedName = (e) => {
        setName(e.target.value);
        setProductDetails(prev => ({ ...prev, name: e.target.value }));
        handleChanged();
    }

    const handleChangedDescription = (e) => {
        setDescription(e.target.value);
        setProductDetails(prev => ({ ...prev, description: e.target.value }));
        handleChanged();
    }

    const handleChangedCategory = (e) => {
        setCategory(e.target.value);
        setProductDetails(prev => ({ ...prev, category: e.target.value }));
        handleChanged();
    }

    const handleChangedFinalPrice = (e) => {
        setFinalPrice(e.target.value);
        setProductDetails(prev => ({ ...prev, finalPrice: e.target.value }));
        handleChanged();
    }

    const handleChangedSecondaryPrice = (e) => {
        setSecondaryPrice(e.target.value);
        setProductDetails(prev => ({ ...prev, secondaryPrice: e.target.value }));
        handleChanged();
    }

    const handleChangedDiscount = (e) => {
        setDiscount(e.target.value);
        setProductDetails((prev) => (
            {
                ...prev,
                discount: e.target.value
            }
        ));
        handleChanged();
    }

    const handleSubmit = async () => {
        
        console.log("Submitting product details...");

        if(edited){
            setOnSubmit(true);
            console.log("Submitting product details:", productDetails);
            // Here you would typically send the updated product details to your backend
            const data = await AdminMethods.handleAdminSearchProductEdit(productDetails.id, productDetails);
            console.log("Product details updated:", data);

            if(data?.error) {
                alert(`Error updating product: ${data.error}`);
            }else{
                alert("Product updated successfully!");
                setOpen(false);
                closeIt();
                window.location.reload();
            }

        }
    }


    return (
        <div className="ManageProduct">
            
            <Dialog open={open} maxWidth="lg" style={{overflow: 'hidden'}} fullWidth={true} onClose={handleClose} className="ManageProductDialog">


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
                            <input type="text" name="text" value={name} onChange={handleChangedName}/>
                        </div>
                        <div className="ManageProductDialogContainerDetailsActions">
                        <label className="ManageProductDialogContainerDetailsLabel">Description of the product</label>
                        <input type="text" name="text" value={description} onChange={handleChangedDescription}/>
                        </div>
                        <div className="ManageProductDialogContainerDetailsActions">
                            <label className="ManageProductDialogContainerDetailsLabel">Category of the product</label>
                            <select name="category" value={category} onChange={handleChangedCategory}>
                                <option value="clothing">Motivation Tees</option>
                                <option value="electronics">Sarcastic Tees</option>
                                <option value="accessories">Offensive Tees</option>
                            </select>
                        </div>
                        <div className="ManageProductDialogContainerDetailsActions">
                            <label className="ManageProductDialogContainerDetailsLabel">Final Price of the product</label>
                            <input type="text" name="text" value={finalPrice} onChange={handleChangedFinalPrice}/>
                        </div>
                        <div className="ManageProductDialogContainerDetailsActions">
                            <label className="ManageProductDialogContainerDetailsLabel">Secondary Price of the product</label>
                            <input type="text" name="text" value={secondaryPrice} onChange={handleChangedSecondaryPrice}  />
                        </div>
                        <div className="ManageProductDialogContainerDetailsActions">
                            <label className="ManageProductDialogContainerDetailsLabel">Discount of the product</label>
                            <input type="text" name="text" value={discount} onChange={handleChangedDiscount}/>
                        </div>

                    </div>

                </div>

                <div className="ManageProductDialogReviews">
                    <h3 className="ManageProductDialogReviewsHead">Reviews</h3>
                    <div className="ManageProductDialogReviewsContainer">
                        {
                            productDetails?.reviews?.length > 0 ? productDetails.reviews.map((review, index) => (
                                <div key={index} className="ManageProductDialogReviewsContainerEachReview">
                                    <div className="ManageProductDialogReviewsContainerEachReviewText">
                                        <div className="ManageProductDialogReviewsContainerEachReviewTextDetails">

                                            {review.content}
                                            <div className="ManageProductDialogReviewsContainerEachReviewTextRating">
                                                
                                                {
                                                    Array.from({ length: review.star }).map((_, i) => (
                                                        <span key={i} className="ManageProductDialogReviewsContainerEachReviewTextRatingStar">★</span>
                                                    ))
                                                }

                                            </div>
                                        </div>
                                        <div className="ManageProductDialogReviewsContainerEachReviewUser">
                                            {review.name}
                                        </div>
                                    </div>
                                    
                                    <div onClick={() => handleReviewDelete(index)}>
                                        <DeleteIcon />
                                    </div>
                                </div>
                            )) : <p className="ManageProductDialogReviewsContainerEachNoReview">No reviews yet.</p>
                        }
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

                <div className="ManageProductDialogBtn" style={{ opacity: edited ? '1' : '.5' }} onClick={onSubmit ? null: handleSubmit}>
                    {
                        onSubmit ? <p>Submitting...</p> : <p>Submit</p>
                    }
                </div>

            </Dialog>
            

        </div>

    );
}

export default ManageProducts;