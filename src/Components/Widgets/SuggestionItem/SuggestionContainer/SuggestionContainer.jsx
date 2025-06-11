
import React, { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import QuickView from "../../QuickView/QuickView";
import { useNavigate } from "react-router";


const SuggestionContainer = ({ img, finalPrice, title, product }) => {

    const [hover, setHover] = React.useState(false);
    const [visibilityHover, setVisibilityHover] = React.useState(false);

    const [open, setOpen] = useState(false);

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
        // refersh the page
        navigate(`/products/${title}`, {state: product});
        window.location.reload(
            false // This will not reload the page from the server, but will refresh the state
        );
        window.scrollTo(0, 0);
        
    }

    return (
        <div className="SuggestionItemContainer" onMouseLeave={onLeave}> 
                <div className="SuggestionItemContainerImg" onMouseOver={onHover} onClick={handleToPage}>
                    <img className="SuggestionItemContainerImgImg" src={img} alt="Product" /> 
                </div>
                <div className="SuggestionItemContainerContent" onClick={handleToPage}>
                    <p className="SuggestionItemContainerName">{title}</p>
                    <p className="SuggestionItemContainerPrice">Rs. {finalPrice} <span className="SuggestionItemContainerPriceSecondary">Rs. 799.00</span></p>
                </div>

            <div onMouseOver={onVisibilityOver}  onMouseLeave={onVisibilityLeave} onClick={onVisibilityClick} className={ hover? "SuggestionItemContainerQuickBtn": "SuggestionItemContainerQuickBtnNotHovered" } style={visibilityHover ? {backgroundColor: "black"}: {}}>

                <VisibilityIcon fontSize="small" color={visibilityHover? 'primary': 'black'} />

                <p className={ visibilityHover? "SuggestionItemContainerQuickViewPara": "SuggestionItemContainerQuickViewParaHide"}>Quick View</p>
            </div>

            <QuickView open={open} handleClose={handleClose} color={product.colors} secondaryPrice={product.secondaryPrice} discount={product.discount} image={img} name={title} price={finalPrice} sizes={product.sizes} secondary={img} func={onVisibilityClick} />

        </div>
    )
}

export default SuggestionContainer;