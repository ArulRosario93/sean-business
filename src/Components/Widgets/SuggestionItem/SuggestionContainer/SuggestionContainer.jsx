
import React, { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import QuickView from "../../QuickView/QuickView";


const SuggestionContainer = ({ img, finalPrice, title, product }) => {

    const [hover, setHover] = React.useState(false);
    const [visibilityHover, setVisibilityHover] = React.useState(false);

    const [open, setOpen] = useState(false);

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
        onVisibilityLeave();
        onLeave();
    }

    const onVisibilityOver = () => {

        setVisibilityHover(true);

    }

    const onVisibilityLeave = () => {
        setVisibilityHover(false);
    }

    const handleToPage = () => {
     
        // navigate

        onLeave();
        onVisibilityLeave();
    }

    return (
        <div className="SuggestionItemContainer" onMouseLeave={onLeave}>
                <div className="SuggestionItemContainerImg" onMouseOver={onHover}>
                    <img className="SuggestionItemContainerImgImg" src={img} alt="Product" /> 
                </div>
                <div className="SuggestionItemContainerContent">
                    <p className="SuggestionItemContainerName">{title}</p>
                    <p className="SuggestionItemContainerPrice">Rs. {finalPrice} <span className="SuggestionItemContainerPriceSecondary">Rs. 799.00</span></p>
                </div>

            <div onMouseOver={onVisibilityOver}  onMouseLeave={onVisibilityLeave} onClick={onVisibilityClick} className={ hover? "SuggestionItemContainerQuickBtn": "SuggestionItemContainerQuickBtnNotHovered" } style={visibilityHover ? {backgroundColor: "black"}: {}}>

                <VisibilityIcon fontSize="small" color={visibilityHover? 'primary': 'black'} />

                <p className={ visibilityHover? "SuggestionItemContainerQuickViewPara": "SuggestionItemContainerQuickViewParaHide"}>Quick View</p>
            </div>

            <QuickView open={open} handleClose={handleClose} color={product.color} colorRGB={product.colorRGB} image={img} name={title} price={finalPrice} sizes={product.sizes} secondary={img} func={onVisibilityClick} />

        </div>
    )
}

export default SuggestionContainer;