
import React from "react";
import "./BigItemContainer.css";

import { useNavigate } from "react-router-dom";
import QuickView from "../Widgets/QuickView/QuickView";
import VisibilityIcon from '@mui/icons-material/Visibility';

const BigItemContainer = ({ image, secondaryImage, sizes, name, price, product }) => {

    const [hover, setHover] = React.useState(false);
    const [visibilityHover, setVisibilityHover] = React.useState(false);

    const [open, setOpen] = React.useState(false);

    const navigate = useNavigate();

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const onHover = () => {
        setHover(true);        
    }

    const onLeave = () => {
        setHover(false);
    }

    const onVisibilityClick = () => {
        handleOpen();
        onLeave();
        onVisibilityLeave();
    }
    
    const onVisibilityOver = () => {
        setVisibilityHover(true);
    }
    
    const onVisibilityLeave = () => {
        setVisibilityHover(false);
    }
    
    const handleCLick = () => {
        onLeave();
        onVisibilityLeave();
        navigate(`/products/${name}`, {state: product});
        window.scrollTo(0, 0);
    }

    return (
        <div className="BigItemContainer" onMouseLeave={onLeave}>
            <div className="BidItemContainerImg" onMouseOver={onHover} >
                <img src={image} onClick={handleCLick} alt="" srcset="" />

                <div className="BigItemContainerContentSceondaryImg" onClick={handleCLick} style={ hover? {opacity: "0"}: {opacity: "1"}} >
                    <img src={secondaryImage} alt={secondaryImage} />
                </div>

                <div onMouseOver={onVisibilityOver} onClick={onVisibilityClick} className={ hover? "BigItemContainerContentSceondaryImgQuickBtn": "BigItemContainerContentSceondaryImgQuickBtnNotHovered" } style={visibilityHover ? {backgroundColor: "black"}: {}}>

                    <VisibilityIcon fontSize="small" color={visibilityHover? 'primary': 'black'} />

                    <p className={ visibilityHover? "BigItemContainerContentSceondaryImgQuickViewPara": "BigItemContainerContentSceondaryImgQuickViewParaHide"}>Quick View</p>
                </div>
            </div>

            <div className="BigItemContainerContent" onClick={handleCLick}>
                <h3 className="BigItemContainerContentHead">{name}</h3>
                <p className="BigItemContainerContentPara"><span className="BigItemContainerContentLineThrough">Rs: {price}</span> Rs: {product.secondaryPrice}</p>
            </div>

            <QuickView open={open} handleClose={handleClose} sizes={sizes} discount={product.discount} color={product.colors} image={image} name={name} price={price} secondaryPrice={product.secondaryPrice} secondary={secondaryImage} func={onVisibilityClick} />

        </div>
    );
}

export default BigItemContainer;