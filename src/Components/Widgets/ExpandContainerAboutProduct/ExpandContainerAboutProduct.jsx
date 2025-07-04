
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from "../Divider/Divider";

const ExpandContainerAboutProduct = ({ productDescription }) => {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
    
        setOpen(!open);

    }

    return (
        <div className="ExpandContainer">

            <div className="ExpandContainerTitle" onClick={handleClick}>
                <p className="ExpandContainerTitleHead">About Us</p>
                <ExpandMoreIcon className={open? "ExpandContainerarrow": ""} />
            </div>
            <Divider />

            <div className={`${open ? "ExpandContainerContentOpen" : "ExpandContainerContent"}`}>

                <div className="ExpandContainerContentForProductDescription">

                    {
                        productDescription && productDescription?.length > 0 ? (
                            productDescription?.map((description, index) => (

                                <>
                                    <p className="ExpandContainerContentForProductDescriptionHead">{description?.heading}</p>

                                    <div className="ExpandContainerContentForProductDescriptionHighlights">
                                    
                                        <p className="ExpandContainerContentForProductDescriptionHighlightsPara">
                                            {description?.description}</p>

                                    </div>
                                </>                                

                            ))
                        ) : (
                            <p className="ExpandContainerContentForProductDescriptionPara">No product description available.</p>
                        )
                    }

                </div>

            </div>
        </div>
    )
}

export default ExpandContainerAboutProduct;