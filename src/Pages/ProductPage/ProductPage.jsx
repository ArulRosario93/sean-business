import React from "react";
import "./ProductPage.css";
import { useParams } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ShareIcon from '@mui/icons-material/Share';
import Divider from "../../Components/Widgets/Divider/Divider";

const ProductPage = (props) => {

    const { id } = useParams();
    console.log(id);

    return (
        <div className="ProductPage">

            <div className="ProductPageFlex">

                <div className="ProductPageImgsContent">

                    <div className="ProductPageImgsContentImg">
                        <img src="https://static.wixstatic.com/media/232e4c_d106e6869b9b4551ad7a000a06c9b92b~mv2.jpg/v1/fill/w_564,h_1015,al_c,q_85,enc_avif,quality_auto/232e4c_d106e6869b9b4551ad7a000a06c9b92b~mv2.jpg" alt="Product" />
                    </div>
                    <div className="ProductPageImgsContentImg">
                        <img src="https://static.wixstatic.com/media/232e4c_d106e6869b9b4551ad7a000a06c9b92b~mv2.jpg/v1/fill/w_564,h_1015,al_c,q_85,enc_avif,quality_auto/232e4c_d106e6869b9b4551ad7a000a06c9b92b~mv2.jpg" alt="Product" />
                    </div>
                    <div className="ProductPageImgsContentImg">
                        <img src="https://static.wixstatic.com/media/232e4c_d106e6869b9b4551ad7a000a06c9b92b~mv2.jpg/v1/fill/w_564,h_1015,al_c,q_85,enc_avif,quality_auto/232e4c_d106e6869b9b4551ad7a000a06c9b92b~mv2.jpg" alt="Product" />
                    </div>
                    <div className="ProductPageImgsContentImg">
                        <img src="https://static.wixstatic.com/media/232e4c_d106e6869b9b4551ad7a000a06c9b92b~mv2.jpg/v1/fill/w_564,h_1015,al_c,q_85,enc_avif,quality_auto/232e4c_d106e6869b9b4551ad7a000a06c9b92b~mv2.jpg" alt="Product" />
                    </div>

                </div>
                <div className="ProductPageContent">

                    <div className="ProductPageContentTitleAndWishList">
                        <h3 className="ProductPageContentTitle">Endless Hope Graphic Printed Oversized T-Shirt - Multi Color</h3>
                        <div className="ProductPageContentWishList">
                            <FavoriteBorderIcon />
                        </div>
                    </div>

                    <div className="ProductPageContentPrice">
                        <p className="ProductPageContentPriceFinal">Rs. 729.00</p>
                        <p className="ProductPageContentPriceBefore">Rs. 1,999.00</p>
                        <p className="ProductPageContentPriceDiscount">SAVE 64%</p>
                    </div>

                    <p className="ProductPageContentMRP">MRP incl. of all taxes</p>

                    <div className="ProductPageContentColor">

                        <p className="ProductPageContentColorTitle">Color: <span>Beige</span></p>

                        <div className="ProductPageContentColorDivs">

                            <div className="ProductPageContentColorDivsCircle"></div>

                        </div>
                    </div>

                    <div className="ProductPageContentColorSize">

                        <p className="ProductPageContentColorSizeTitleHead">Size: <span>M</span></p>

                        <div className="ProductPageContentColorSizeTitle">
                            <div className="ProductPageContentColorSizeContainer">
                                <div className="ProductPageContentColorSizeContainerEachSelected">
                                    S
                                </div>
                                <div className="ProductPageContentColorSizeContainerEach">
                                    M
                                </div>
                                <div className="ProductPageContentColorSizeContainerEach">
                                    L
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ProductPageContentQuantityAndAddtoCart">
                        <p className="ProductPageContentQuantityAndAddtoCartPara">Quality</p>
                        <div className="ProductPageContentQuantity">
                            

                            <div className="ProductPageContentQuantityContainer">
                                <p className="ProductPageContentQuantityContainerNegative">-</p>
                                <p className="ProductPageContentQuantityContainerInt">5</p>
                                <p className="ProductPageContentQuantityContainerPositive">+</p>
                            </div>
                            <div className="ProductPageContentAddToCart">
                                <p className="ProductPageContentAddToCartContainer">Add To Cart</p>
                            </div>

                        </div>
                    </div>

                    <div className="ProductPageContentBuyitNow">
                        <p>Buy It Now</p>
                    </div>

                    <div className="ProductPageContentAsknShare">
                        <div className="ProductPageContentAsk">
                            <HelpOutlineIcon /> 
                            <p>Ask a Question</p>
                        </div>
                        <div className="ProductPageContentShare">
                            <ShareIcon />
                            <p>Share</p>
                        </div>
                    </div>

                    <Divider />

                    <div className="ProductPageContentFreeShipping">
                        <p className="ProductPageContentFreeShippingPara"><span className="ProductPageContentFreeShippingParaSpan">Free Shipping & Returns:</span> On all orders over ₹499, 7 day Easy Returns.</p>
                    </div>

                    <div className="ProductPageContentEstimatedDelivery">
                        <p className="ProductPageContentEstimatedDeliveryPara"><span className="ProductPageContentEstimatedDeliveryParaSpan">Estimated Delivery:</span> Apr 13 - Apr 15.</p>
                    </div>

                    <Divider />
                    
                </div>

            </div>

        </div>
    );
}

export default ProductPage;