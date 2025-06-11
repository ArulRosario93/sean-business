
import React, { useState } from 'react';
import './QuickView.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const   QuickView = ({ image, name, price, sizes, secondary, secondaryPrice, discount, open, handleClose, color }) => {

    const [size, setSize] = React.useState(sizes[0]);
    const [colorsSelected, setColorsSelected] = React.useState({name: color[0]?.name, rgba: color[0]?.rgba});
    const [quantity, setQuantity] = React.useState(1);
    
    const CloseIt = () => {
        handleClose();
    }

    const handleSize = (item) => {
        setSize(item);
    }
    
    const handlePlus = () => {
        quantity < 20 && quantity > 0 && setQuantity(quantity + 1);
    }
    
    const handleMinus = () => {
        if(quantity > 1){
            setQuantity(quantity - 1);
        }   
    }
    
    const handleChangeColor = (item) => {
        console.log(item);
        setColorsSelected(item);
    }


    return (

        <Dialog open={open} onClose={CloseIt} maxWidth="md" fullWidth>

            <DialogContent style={{ padding: "0px" }}>

                <div className="QuickViewContainer">
                    <div className="QuickViewContainerImg">
                        <img className='QuickViewContainerImgImg' src={image} alt="" srcset="" />
                    </div>

                    <div className="QuickViewContainerContent">

                        <div className="QuickViewContainerContentTitleAndWishList">
                            <h3 className="QuickViewContainerContentTitle">{name}</h3>
                            <div className="QuickViewContainerContentWishList">
                                <FavoriteBorderIcon />
                            </div>
                        </div>

                        <div className="QuickViewContainerContentPrice">
                            <p className="ProductPageContentPriceFinal">Rs.{price}</p>
                            <p className="ProductPageContentPriceBefore">Rs. {secondaryPrice}</p>
                            <p className="ProductPageContentPriceDiscount">SAVE {discount}%</p>
                        </div>

                        <p className="QuickViewContainerContentMRP">MRP incl. of all taxes</p>

                        <div className="QuickViewContainerContentColor">

                            <p className="ProductPageContentColorTitle">Color: <span>{colorsSelected.name}</span></p>

                            <div className="ProductPageContentColorContainer">
                                {
                                    color.map((item, index) => {
                                        return(
                                            <div className="ProductPageContentColorDivs" key={index} style={item.name == colorsSelected.name? {border: "2px solid black"}: {}}>
                                                <div className="ProductPageContentColorDivsCircle" onClick={() => handleChangeColor(item)} style={{ backgroundColor: item.rgba }}></div>
                                            </div>
                                        )
                                })}
                                
                            </div>
                        </div>

                        <div className="QuickViewContainerContentColorTitleColorSize">

                            <p className="ProductPageContentColorSizeTitleHead">Size: <span>{size}</span></p>

                            <div className="ProductPageContentColorSizeTitle">
                                <div className="ProductPageContentColorSizeContainer">

                                    {

                                        sizes.map((item, index) => {    
                                            return (
                                                <div key={index} className="ProductPageContentColorSizeContainerEach" style={item == size? {background: "black", color: 'white'}: {}} onClick={() => setSize(item)}>
                                                    {item}
                                                </div>
                                            )
                                        })  
                                    }

                                    
                                </div>
                            </div>
                        </div>

                        <div className="QuickViewContainerContentColorTitleColorSizeAndAddtoCart">
                            <p className="ProductPageContentQuantityAndAddtoCartPara">Quality</p>
                            <div className="ProductPageContentQuantity">

                                <div className="ProductPageContentQuantityContainer">
                                    <p className="ProductPageContentQuantityContainerNegative" onClick={handleMinus} style={quantity > 1? {color: "black"}: {color: 'gray'}}>-</p>
                                    <p className="ProductPageContentQuantityContainerInt">{quantity}</p>
                                    <p className="ProductPageContentQuantityContainerPositive" onClick={handlePlus} style={quantity < 20? {color: "black"}: {color: 'gray'}}>+</p>
                                </div>
                                <div className="ProductPageContentAddToCart">
                                    <p className="ProductPageContentAddToCartContainer">Add To Cart</p>
                                </div>

                            </div>
                        </div>

                        <div className="ProductPageContentBuyitNow">
                            <p>Buy It Now</p>
                        </div>
                    </div>
                </div>

            </DialogContent>

        </Dialog>
    );
}

export default QuickView;