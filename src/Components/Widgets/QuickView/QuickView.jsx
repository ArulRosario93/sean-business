
import React, { useEffect, useState } from 'react';
import './QuickView.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Favorite } from '@mui/icons-material';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const   QuickView = ({ image, name, price, sizes, id, secondaryPrice, discount, open, handleClose, color }) => {

    const [size, setSize] = React.useState(sizes[0]);
    const [colorsSelected, setColorsSelected] = React.useState({name: color[0]?.name, rgba: color[0]?.rgba});
    const [quantity, setQuantity] = React.useState(1);
    const [wishList, setWishList] = React.useState(false);
    
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

    const handleCheckWishList = () => {
        
        const wishList = JSON.parse(localStorage.getItem('wishlist')) || [];
        const existingItemIndex = wishList.findIndex(wishListItem => 
            wishListItem.productId === id
        );

        if(existingItemIndex !== -1){
            setWishList(true);
        }
    
    }

    const handleWishList = () => {
    
        const wishList = JSON.parse(localStorage.getItem('wishlist')) || [];
        const item = {
            productId: id,
            name: name,
            price: price,
            secondaryPrice: secondaryPrice,
            color: colorsSelected.name,
            rgba: colorsSelected.rgba,
            size: size,
            quantity: quantity,
            image: image,
        }

        const existingItemIndex = wishList.findIndex(wishListItem => 
            wishListItem.productId === item.productId
        );

        if(existingItemIndex !== -1){
        
            wishList.splice(existingItemIndex, 1);
            localStorage.setItem('wishlist', JSON.stringify([...wishList]));
            setWishList(false);
            console.log("Removed from wishlist");
            return;
            
        }

        localStorage.setItem('wishlist', JSON.stringify([...wishList, item]));
        setWishList(true);
        
    }
    

    const handleAddToCart = () => {

        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const item = {
            productId: id,
            name: name,
            price: price,
            secondaryPrice: secondaryPrice,
            color: colorsSelected[0]?.name,
            rgba: colorsSelected[0]?.rgba,
            size: size,
            quantity: quantity,
            image: image,
        }

        const existingItemIndex = cart.findIndex(cartItem => 
            cartItem.productId === item.productId
        );

        if(existingItemIndex !== -1){
            cart[existingItemIndex].quantity += quantity;
            localStorage.setItem('cart', JSON.stringify([...cart, item]));
            console.log("Added to cart");
        }
    }

    useEffect(() => {
        handleCheckWishList();
    }, [])

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
                            <div className="QuickViewContainerContentWishList" onClick={handleWishList} style={wishList? {border: "1px solid red",}: {border: "1px solid black"}}>
                                { wishList? <Favorite color="error" /> : <FavoriteBorderIcon /> }
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
                                <div className="ProductPageContentAddToCart" onClick={handleAddToCart}>
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