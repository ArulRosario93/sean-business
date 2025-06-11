import React, { useEffect } from "react";
import "./ProductPage.css";
import { useParams, useLocation } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ShareIcon from '@mui/icons-material/Share';
import Divider from "../../Components/Widgets/Divider/Divider";
import ExpandContainer from "../../Components/Widgets/ExpandContainer/ExpandContainer";
import SuggetionItem from "../../Components/Widgets/SuggestionItem/SuggestionItem";
import { colors } from "@mui/material";

const ProductPage = (
    // { title, finalPrice, secondaryPrice, discount, images, color, colorRGB, sizes, highlights }
) => {

    const { state } = useLocation();
    const params = useParams();
    
    const [product, setProduct] = React.useState({});
    const [selectedColor, setSelectedColor] = React.useState({});
    const [suggestedProduct, setSuggestedProduct] = React.useState([]);
    const [size, setSize] = React.useState(product?.sizes?.[0] ?? "M");
    const [quantity, setQuantity] = React.useState(1);

    const handlePlus = () => {
        quantity < 20 && quantity > 0 && setQuantity(quantity + 1);
    }

    const handleMinus = () => {
        if(quantity > 1){
            setQuantity(quantity - 1);
        }   
    }


    const handleProduct = async (name) => {

        await fetch('http://localhost:5000/products/name', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: name }),
        })
        .then((res) => res.json())
        .then((res) => {
            setProduct(res);
        });

    }

    const handleSuggestedProducts = async () => {
        // Fetch data from the server (if needed)
        await fetch('http://localhost:5000/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => res.json())
        .then((res) => {
            // console.log(res);
            setSuggestedProduct(res);
        })

    }

    const handleColorChange = (item) => {
        setSelectedColor(item);
    }

    useEffect(() => {   
        if(!state){
            console.log(params.id);
            handleProduct(params.id);   
        }
        else{
            setProduct(state);
            setSelectedColor(state?.colors?.[0]);
        }
        handleSuggestedProducts();
    }, []);

    return (
        <div className="ProductPage">

            <div className="ProductPageFlex">

                <div className="ProductPageImgsContent">

                    {
                        product?.images?.map((img, index) => {
                            return (
                                <div key={index} className="ProductPageImgsContentImg">
                                    <img src={img} alt="Product" />
                                </div>
                            )
                        })
                    }

                </div>
                <div className="ProductPageContent">

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

                    <p className="ProductPageContentMRP">MRP incl. of all taxes</p>

                    <div className="ProductPageContentColor">

                        <p className="ProductPageContentColorTitle">Color: <span>{selectedColor?.name}</span></p>

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

                        <p className="ProductPageContentColorSizeTitleHead">Size: <span>{size}</span></p>

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

            <SuggetionItem SuggestedList={suggestedProduct} />
        </div>
    );
}

export default ProductPage;