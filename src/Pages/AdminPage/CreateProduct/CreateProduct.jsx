import React from "react";
import './CreateProduct.css';

import { Dialog } from "@mui/material";
const CreateProduct = ({ closeIt }) => {

    const [dialogOpen, setDialogOpen] = React.useState(true);

    const [product, setProduct] = React.useState({});

    const [productName, setProductName] = React.useState("");
    const [productDescription, setProductDescription] = React.useState("");
    const [productFinalPrice, setProductFinalPrice] = React.useState();
    const [productSecondaryPrice, setProductSecondaryPrice] = React.useState();
    const [productDiscount, setProductDiscount] = React.useState();
    const [productImages, setProductImages] = React.useState([]);
    const [productSizes, setProductSizes] = React.useState([]);
    const [productCategory, setProductCategory] = React.useState("");
    const [productColors, setProductColors] = React.useState([{
        name: "",
        rgba: ""
    }]);

    const initialProductSizes = ["S", "M", "L", "XL", "XXL"];

    const handleProductName = () => {}

    const handleProductDescription = () => {}

    const handleProductFinalPrice = () => {}

    const handleProductSecondaryPrice = () => {}

    const handleProductDiscount = () => {}

    const handleProductImages = (e) => {
        const files = e.target.files;
        const imagesArray = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            reader.onloadend = () => {
                imagesArray.push(reader.result);
                if (imagesArray.length === files.length) {
                    setProductImages(prevImages => [...prevImages, ...imagesArray]);
                }
            };
            reader.readAsDataURL(file);
        }
    }

    const handleProductCategory = () => {}

    const handleProductColor = () => {
        console.log("Product color added");
    }

    return (
        <div>

            <Dialog open={dialogOpen} fullWidth maxWidth='lg' onClose={closeIt} className="CreateProductDialog">
                
                <div className="CreateProductDialogContainer">

                    <h2 className="CreateProductDialogContainerTitle">Create Product</h2>

                    <div className="CreateProductDialogContainerContent">
                        <div className="CreateProductDialogContainerImages">

                            <img src="https://img.ltwebstatic.com/v4/j/pi/2025/04/22/df/1745290384a7b5d4903a33ef381ae59994ee3545e7_thumbnail_405x.webp" alt="" srcset="" />
                            <img src="https://img.ltwebstatic.com/v4/j/pi/2025/04/22/df/1745290384a7b5d4903a33ef381ae59994ee3545e7_thumbnail_405x.webp" alt="" srcset="" />
                            <img src="https://img.ltwebstatic.com/v4/j/pi/2025/04/22/df/1745290384a7b5d4903a33ef381ae59994ee3545e7_thumbnail_405x.webp" alt="" srcset="" />

                            <div className="CreateProductDialogContainerImagesAdd">
                                <input type="file" id="file" style={{display: 'none'}}/>
                                <label htmlFor="file">+</label>
                            </div>
                        </div>
                        <div className="CreateProductDialogContainerForm">

                            <div className="CreateProductDialogContainerFormGroup">

                                <label htmlFor="productName">Product Name</label>
                                <input 
                                    type="text" 
                                    id="productName" 
                                    value={productName} 
                                    onChange={(e) => setProductName(e.target.value)} 
                                    placeholder="Enter product name" 
                                    className="CreateProductDialogContainerFormInput"
                                />

                            </div>

                            <div className="CreateProductDialogContainerFormGroup">
                                <label htmlFor="productDescription">Product Description</label>
                                <textarea 
                                    id="productDescription" 
                                    value={productDescription} 
                                    onChange={(e) => setProductDescription(e.target.value)} 
                                    placeholder="Enter product description" 
                                    className="CreateProductDialogContainerFormTextarea"
                                ></textarea>

                            </div>

                            <div className="CreateProductDialogContainerFormGroup">
                                <label htmlFor="productFinalPrice">Final Price</label>
                                <input 
                                    type="number" 
                                    id="productFinalPrice" 
                                    value={productFinalPrice} 
                                    onChange={(e) => setProductFinalPrice(e.target.value)} 
                                    placeholder="Enter final price" 
                                    className="CreateProductDialogContainerFormInput"
                                />
                            </div>

                            <div className="CreateProductDialogContainerFormGroup">
                                <label htmlFor="productSecondaryPrice">Secondary Price</label>
                                <input 
                                    type="number" 
                                    id="productSecondaryPrice" 
                                    value={productSecondaryPrice} 
                                    onChange={(e) => setProductSecondaryPrice(e.target.value)} 
                                    placeholder="Enter secondary price" 
                                    className="CreateProductDialogContainerFormInput"
                                />
                            </div>

                            <div className="CreateProductDialogContainerFormGroup">
                                <label htmlFor="productDiscount">Discount</label>
                                <input 
                                    type="number" 
                                    id="productDiscount" 
                                    value={productDiscount} 
                                    onChange={(e) => setProductDiscount(e.target.value)} 
                                    placeholder="Enter discount percentage" 
                                    className="CreateProductDialogContainerFormInput"
                                />
                            </div>

                            <div className="CreateProductDialogContainerFormGroup">
                                <label htmlFor="productCategory">Category</label>
                                <select id="productCategory" value={productCategory} className="CreateProductDialogContainerFormInput">
                                    <option value="clothing">Clothing</option>
                                    <option value="electronics">Electronics</option>
                                    <option value="home_appliances">Home Appliances</option>
                                </select>

                            </div>

                            <div className="CreateProductDialogContainerFormGroup">
                                <label htmlFor="productSize">Sizes</label>

                                <div className="CreateProductDialogContainerFormGroupProductSizeContainer">

                                    {
                                        initialProductSizes.map((size, index) => (
                                            <div className="CreateProductDialogContainerFormGroupProductSize" key={index}>
                                                <p className="CreateProductDialogContainerFormGroupSizePara">{size}</p>
                                            </div>

                                        ))
                                    }
                                </div>
                            </div>

                            <div className="CreateProductDialogContainerFormGroup">
                                <div className="productColorLabelContainerWhole">
                                    <div className="productColorContainer">
                                        <label className="productColorLabel" htmlFor="productColor">Color</label>
                                        <div className="productColorSpan"><div className="productColorSpanDiv"></div></div>
                                    </div>

                                    <div className="productColorAddButton">
                                        <p>Add Color</p>
                                    </div>
                                </div>
                                <input
                                    type="text" 
                                    id="productColor"
                                    value={productColors[0]?.name}
                                    onSubmitCapture={handleProductColor}
                                    onSubmit={handleProductColor}
                                    placeholder="Enter product color" 
                                    className="CreateProductDialogContainerFormInput"
                                />
                            </div>

                        </div>
                    </div>

                    <div className="CreateProductDialogContainerActions">
                        <button type="submit">Create Product</button>
                    </div>

                </div>

            </Dialog>
            
        </div>
    );
};

export default CreateProduct;