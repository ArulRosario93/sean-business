import React from "react";
import './CreateProduct.css';

import { Dialog } from "@mui/material";
const CreateProduct = ({ closeIt }) => {

    const [dialogOpen, setDialogOpen] = React.useState(true);

    const [product, setProduct] = React.useState({});

    const [productName, setProductName] = React.useState("");
    const [productDescriptionHeading, setProductDescriptionHeading] = React.useState("");
    const [productDescription, setProductDescription] = React.useState("");
    const [productDescriptions, setProductDescriptions] = React.useState([]);
    const [productFinalPrice, setProductFinalPrice] = React.useState();
    const [productSecondaryPrice, setProductSecondaryPrice] = React.useState();
    const [productDiscount, setProductDiscount] = React.useState();
    const [productImages, setProductImages] = React.useState([]);
    const [productSizes, setProductSizes] = React.useState([]);
    const [productCategory, setProductCategory] = React.useState("Clothing");
    const [productColors, setProductColors] = React.useState([]);
    const [productColor, setProductColor] = React.useState({ name: "", rgba: "" });

    const initialProductSizes = ["S", "M", "L", "XL", "XXL"];


    const handleProductDescriptionAddGroup = () => {
        

        if(!productDescriptionHeading || !productDescription) {
            alert("Please enter both heading and description.");
            return;
        }

        setProductDescriptions(prevDescriptions => [
            ...prevDescriptions,
            {
                heading: productDescriptionHeading,
                description: productDescription
            }
        ]);
        setProductDescriptionHeading("");
        setProductDescription("");

    }

    const handleProductImages = () => {
        
        const imageLink = prompt("Enter the image link:");
        if (imageLink) {
            // Assuming product is a state variable, you would update it here
            setProductImages(prevImages => [...prevImages, imageLink]);
        }

    }

    const handleProductSizes = (e) => {

        const sizeValue = e;

        if (sizeValue && !productSizes.includes(sizeValue)) {
            setProductSizes(prevSizes => [...prevSizes, sizeValue]);
            console.log("Product size added:", sizeValue);
        } else {
            
            setProductSizes(prevSizes => prevSizes.filter(size => size !== sizeValue));

        }
    }

    const handleProductCategory = (e) => {
        setProductCategory(e.target.value);
        console.log("Product category selected:", e.target.value);
    }

    const handleProductColorChange = (e) => {

        const colorValue = e.target.value;

        setProductColor({name: colorValue, rgba: `${colorValue}`.toLowerCase()});
        console.log("Product color added:", e);
    }
    
    const handleProductAddColor = (e) => {
        
        if (`${productColor.name}`.trim() === "") {
            alert("Enter color");
            return;
        }
        
        setProductColors(prevColors => [...prevColors, {
            name: productColor.name,
            rgba: productColor.rgba
        }]);

        setProductColor({ name: "", rgba: "" });
        
    }
    
    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(productImages, productSizes, productColors, productDescriptions, productName, productFinalPrice, productCategory);

        if (!productName || !productFinalPrice || !productCategory || productImages.length === 0 || productSizes.length === 0 || productColors.length === 0 || productDescriptions.length === 0) {
            alert("Please fill all required fields.");
            return;
        }

        const newProduct = {
            name: productName,
            description: productDescriptions,
            finalPrice: productFinalPrice,
            secondaryPrice: productSecondaryPrice,
            discount: productDiscount,
            images: productImages,
            sizes: productSizes,
            category: productCategory,
            colors: productColors
        };

        console.log("New Product Created:", newProduct);
        
        // Here you would typically send the newProduct to your backend or state management system

        closeIt();

    }
    

    return (
        <div>

            <Dialog open={dialogOpen} fullWidth maxWidth='lg' onClose={closeIt} className="CreateProductDialog">
                
                <div className="CreateProductDialogContainer">

                    <h2 className="CreateProductDialogContainerTitle">Create Product</h2>

                    <div className="CreateProductDialogContainerContent">
                        <div className="CreateProductDialogContainerImages">

                            {
                                productImages.length > 0 ?
                                    productImages.map((image, index) => (
                                        <div className="CreateProductDialogContainerImagesImage" key={index}>
                                            <img src={image} alt={`Product ${index + 1}`} />
                                            <button onClick={() => setProductImages(productImages.filter((_, i) => i !== index))}>Remove</button>
                                        </div>
                                    )) : null
                            }

                            <div className="CreateProductDialogContainerImagesAdd" onClick={handleProductImages}>
                                <label htmlFor="file">+</label>
                            </div>
                        </div>
                        <div className="CreateProductDialogContainerForm">

                            <div className="CreateProductDialogContainerFormGroup">

                                <label htmlFor="productName">Product Name</label>
                                <input 
                                    type="text" 
                                    id="productName" 
                                    contentEditable="true"
                                    value={productName} 
                                    onChange={(e) => setProductName(e.target.value)} 
                                    placeholder="Enter product name" 
                                    className="CreateProductDialogContainerFormInput"
                                />

                            </div>

                                <div className="CreateProductDialogContainerFormGroup">

                                    <div className="CreateProductDialogContainerFormGroupLabelRow">
                                        <label htmlFor="productDescription">Product Description</label>
                                        <button 
                                            className="CreateProductDialogContainerFormGroupAddDescription" onClick={handleProductDescriptionAddGroup}>+</button>
                                    </div>

                                    <input type="text" value={productDescriptionHeading} onChange={(e) => setProductDescriptionHeading(e.target.value)} placeholder="Enter Product Description Heading" name="Enter Product Description Heading" id="" />
                                    <textarea 
                                        id="productDescription" 
                                        value={productDescription}
                                        title="Product Description" 
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
                                <select id="productCategory" value={productCategory} onChange={handleProductCategory} className="CreateProductDialogContainerFormInput">
                                    <option value="clothing">Clothing</option>
                                    <option value="electronics">Electronics</option>
                                    <option value="home_appliances">Home Appliances</option>
                                </select>

                            </div>

                            <div className="CreateProductDialogContainerFormGroup">
                                <label htmlFor="productSize">Select Sizes</label>

                                <div className="CreateProductDialogContainerFormGroupProductSizeContainer">

                                    {
                                        initialProductSizes.map((size, index) => (
                                            <div className={productSizes.includes(size) ? "CreateProductDialogContainerFormGroupProductSizeSelected" : "CreateProductDialogContainerFormGroupProductSize"} onClick={() => handleProductSizes(size)} key={index}>
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
                                        {
                                            productColors.length > 0 && productColors.map((color, index) => (
                                                <div key={index} className="productColorSpan"><div className="productColorSpanDiv" style={{background: color?.rgba}}></div></div>
                                            ))
                                        }
                                    </div>

                                    <div className="productColorAddButton" onClick={handleProductAddColor}>
                                        <p>Add Color</p>
                                    </div>
                                </div>
                                <input
                                    type="text" 
                                    id="productColor"
                                    value={productColor?.name}
                                    onChange={handleProductColorChange}
                                    placeholder="Enter product color"
                                    className="CreateProductDialogContainerFormInput"
                                />
                            </div>

                        </div>
                    </div>

                    <div className="CreateProductDialogContainerActions">
                        <button type="submit" onClick={handleSubmit}>Create Product</button>
                    </div>

                </div>

            </Dialog>
            
        </div>
    );
};

export default CreateProduct;