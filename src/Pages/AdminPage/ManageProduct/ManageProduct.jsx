import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ShareIcon from '@mui/icons-material/Share';
import Divider from "../../../Components/Widgets/Divider/Divider";
import ExpandContainer from "../../../Components/Widgets/ExpandContainer/ExpandContainer";

const ManageProducts = ({ product }) => {

    const handleChangeName = () => {}

    const handleChangeFinalPrice = () => {}

    const handleChangeSecondaryPrice = () => {}

    const handleColordiscount = () => {}

    const handleChangeColor = () => {}

    const handleChangesize = () => {}


    return (
        <div className="ManageProduct">
            
            <div className="ManageProductContainer">

                <div className="ManageProductImage">

                    <img src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png" alt="Manage Products" />
                    <img src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png" alt="Manage Products" />
                    <img src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png" alt="Manage Products" />

                </div>
                
                
                <div className="ManageProductContent">


                    <div className="ProductPageContentTitleAndWishList">
                        <h3 className="ProductPageContentTitle">{product?.name}</h3>
                        <div className="ProductPageContentWishList">
                            <FavoriteBorderIcon />
                        </div>
                    </div>

                    <div className="ProductPageContentPrice">
                        <p className="ProductPageContentPriceFinal">Rs. {product?.finalPrice}</p>
                        <p className="ProductPageContentPriceBefore">Rs. {product?.secondaryPrice}</p>
                        <p className="ProductPageContentPriceDiscount">SAVE {product?.discount}%</p>
                    </div>

                    <div className="ProductPageContentColor">

                        <p className="ProductPageContentColorTitle">Tap to Remove</p>

                        <div className="ProductPageContentColorContainer">

                            {
                                product?.colors?.map((item, index) => {
                                    return(
                                        <div className="ProductPageContentColorDivs" onClick={() => handleColorChange(item)} key={index} style={item?.name == selectedColor?.name? {border: "2px solid black"}: {}}>
                                            <div className="ProductPageContentColorDivsCircle" style={{background: item?.rgba}}></div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>

                    <div className="ProductPageContentColorSize">

                        <p className="ProductPageContentColorSizeTitleHead">Tap to Remove Sizes</p>

                        <div className="ProductPageContentColorSizeTitle">
                            <div className="ProductPageContentColorSizeContainer">

                                {
                                    product?.sizes?.map((item, index) => {
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

                    <Divider />

                    <div className="ProductPageContentFreeShipping">
                        <p className="ProductPageContentFreeShippingPara"><span className="ProductPageContentFreeShippingParaSpan">Free Shipping & Returns:</span> On all orders over ₹499, 7 day Easy Returns.</p>
                    </div>

                    <div className="ProductPageContentEstimatedDelivery">
                        <p className="ProductPageContentEstimatedDeliveryPara"><span className="ProductPageContentEstimatedDeliveryParaSpan">Estimated Delivery:</span> Jan - Jan 15.</p>
                    </div>

                    <Divider />

                    <ExpandContainer title="Product Description" />
                    <ExpandContainer title="Returns, Exchange, & Refund Policy" />
                    <ExpandContainer title="About Us" />

                    
                    
                </div>

            </div>

        </div>
    );
}

export default ManageProducts;