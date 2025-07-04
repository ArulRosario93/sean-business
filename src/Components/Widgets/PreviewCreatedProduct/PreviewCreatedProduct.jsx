
import React from 'react';
import './PreviewCreatedProduct.css';
import { Dialog } from '@mui/material';

const PreviewCreatedProduct = ({ product, closeIt, preview }) => {

    const handleClose = () => {
        closeIt();
    }

    console.log("Product in PreviewCreatedProduct:", product);

    return (
        <Dialog open={preview} fullWidth={true} maxWidth={"lg"} onClose={handleClose} className="PreviewCreatedProductDialog">
            <div className="PreviewCreatedProductContainer">
                
                <div className='PreviewCreatedProductContainerImagesContainer'>
                    <div className='PreviewCreatedProductContainerImages'>

                        { 
                            product.images && product.images.length > 0 ? (
                                product.images.map((image, index) => (
                                    <img key={index} src={image} alt={`Product Image ${index + 1}`} className='PreviewCreatedProductImage' />
                                ))
                            ) : (
                                <p>No images available</p>
                            )
                        }

                    </div>
                </div>

                <div className='PreviewCreatedProductContainerContent'>

                    <h2 className='PreviewCreatedProductTitle'>{product?.name}</h2>
                    
                    <div className='PreviewCreatedroductPrizes'>

                        <p className='PreviewCreatedroductFinalPrize'>Rs. {product.finalPrice}</p>

                        <p className='PreviewCreatedroductSecondaryPrize'>Rs. {product?.secondaryPrice}</p>

                        <p className='PreviewCreatedroductDiscount'>Discount: {product?.discount}%</p>

                    </div>

                    <p className='PreviewCreatedProductMRP'>MRP incl of all taxes</p>

                    <div className='PreviewCreatedProductColorContainer'>

                        <div className='PreviewCreatedProductColorHeader'>
                            <p><b>Color: </b>{product?.colors?.[0]?.name}</p>
                        </div>
                        <div className='PreviewCreatedProductColorsContent'>

                            {
                                product?.color?.colors && product.color.colors.length > 0 ? (
                                product.color.colors.map((color, index) => (
                                    <div key={index} className='PreviewCreatedProductColorBox'>
                                        <div className='PreviewCreatedProductColorCircle' style={{ backgroundColor: color }}></div>
                                    </div>
                                ))
                                ) : null
                            }

                        </div>

                    </div>

                    <div className='PreviewCreatedProductSizeHeader'>
                        <p><b>Sizes</b></p>
                    </div>
                    <div className='PreviewCreatedProductSizes'>
                        {
                            product?.sizes?.map((size, index) => (
                                <div key={index} className='PreviewCreatedProductSizeBox'>
                                    <p className='PreviewCreatedProductSizeText'>{size}</p>
                                </div>
                            ))
                        }

                    </div>

                    <div className='PreviewCreatedProductDescriptionContainer'>

                        <p className='PreviewCreatedProductDescriptionHeader'>Description</p>
                        
                        {
                            product?.descriptions?.map((item, index) => {
                                return (
                                    <div className='PreviewCreatedProductDescriptionContent' key={index}>

                                        <p className='PreviewCreatedProductDescriptionHeading'>{product?.descriptions[index].heading}</p>
                                        <p className='PreviewCreatedProductDescriptionText'>
                                            {product?.descriptions[index].description}
                                            </p>

                                    </div>
                                )
                            })
                        }

                    </div>

                </div>

            </div>
        </Dialog>
    );
}

export default PreviewCreatedProduct;