import React from "react";
import "./ProductPage.css";
import data from "../../Components/data.jsx";
import { useParams, useLocation } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ShareIcon from '@mui/icons-material/Share';
import Divider from "../../Components/Widgets/Divider/Divider";
import ExpandContainer from "../../Components/Widgets/ExpandContainer/ExpandContainer";
import SuggetionItem from "../../Components/Widgets/SuggestionItem/SuggestionItem";

const ProductPage = (
    // { title, finalPrice, secondaryPrice, discount, images, color, colorRGB, sizes, highlights }
) => {

    const { state } = useLocation();

    const { title, finalPrice, secondaryPrice, discount, images, color, colorRGB, sizes, highlights } = state;

    const [size, setSize] = React.useState(sizes[0]);
    const [quantity, setQuantity] = React.useState(1);

    const handlePlus = () => {
        quantity < 20 && quantity > 0 && setQuantity(quantity + 1);
    }

    const handleMinus = () => {
        if(quantity > 1){
            setQuantity(quantity - 1);
        }   
    }

    return (
        <div className="ProductPage">

            <div className="ProductPageFlex">

                <div className="ProductPageImgsContent">

                    {
                        images.map((img, index) => {
                            return (
                                <div className="ProductPageImgsContentImg">
                                    <img src={img} alt="Product" />
                                </div>
                            )
                        })
                    }

                </div>
                <div className="ProductPageContent">

                    <div className="ProductPageContentTitleAndWishList">
                        <h3 className="ProductPageContentTitle">{title}</h3>
                        <div className="ProductPageContentWishList">
                            <FavoriteBorderIcon />
                        </div>
                    </div>

                    <div className="ProductPageContentPrice">
                        <p className="ProductPageContentPriceFinal">Rs. {finalPrice}</p>
                        <p className="ProductPageContentPriceBefore">Rs. {secondaryPrice}</p>
                        <p className="ProductPageContentPriceDiscount">SAVE {discount}%</p>
                    </div>

                    <p className="ProductPageContentMRP">MRP incl. of all taxes</p>

                    <div className="ProductPageContentColor">

                        <p className="ProductPageContentColorTitle">Color: <span>Beige</span></p>

                        <div className="ProductPageContentColorDivs">

                            <div className="ProductPageContentColorDivsCircle"></div>

                        </div>
                    </div>

                    <div className="ProductPageContentColorSize">

                        <p className="ProductPageContentColorSizeTitleHead">Size: <span>{size}</span></p>

                        <div className="ProductPageContentColorSizeTitle">
                            <div className="ProductPageContentColorSizeContainer">

                                {
                                    sizes.map((item, index) => {
                                        return (
                                            <div className="ProductPageContentColorSizeContainerEach" style={item == size? {background: "black", color: 'white'}: {}} onClick={() => setSize(item)}>
                                                {item}
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>

                    <div className="ProductPageContentQuantityAndAddtoCart">
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

                    <div className="ProductPageContentKeyHighlights">
                        <div className="ProductPageContentKeyHighlightsContent">
                            <h1 className="ProductPageContentKeyHighlightsContentHead">Key Highlights</h1>
                            <div className="ProductPageContentKeyHighlightsContentDiv">
                                <div className="ProductPageContentKeyHighlightsContentDivContainer">
                                    <p className="ProductPageContentKeyHighlightsContentDivContainerHead">Fit</p>
                                    <p className="ProductPageContentKeyHighlightsContentDivContainerPara">OverSized Fit</p>
                                    <Divider />
                                </div>
                                <div className="ProductPageContentKeyHighlightsContentDivContainer">
                                    <p className="ProductPageContentKeyHighlightsContentDivContainerHead">Neck</p>
                                    <p className="ProductPageContentKeyHighlightsContentDivContainerPara">Rounded Neck</p>
                                    <Divider />
                                </div>
                            </div>
                            <div className="ProductPageContentKeyHighlightsContentDiv">
                                <div className="ProductPageContentKeyHighlightsContentDivContainer">
                                    <p className="ProductPageContentKeyHighlightsContentDivContainerHead">Pattern</p>
                                    <p className="ProductPageContentKeyHighlightsContentDivContainerPara">Printed</p>
                                    <Divider />
                                </div>
                                <div className="ProductPageContentKeyHighlightsContentDivContainer">
                                    <p className="ProductPageContentKeyHighlightsContentDivContainerHead">Sleeve</p>
                                    <p className="ProductPageContentKeyHighlightsContentDivContainerPara">Regular Sleeve</p>
                                    <Divider />
                                </div>
                            </div>
                        </div>
                    </div>



                        <ExpandContainer title="Product Description" />
                        <ExpandContainer title="Returns, Exchange, & Refund Policy" />
                        <ExpandContainer title="About Us" />


                </div>

            </div>

            <SuggetionItem SuggestedList={data} />
        </div>
    );
}

export default ProductPage;