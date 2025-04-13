
import React from "react";
import "./ExpandContainer.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from "../Divider/Divider";

const ExpandContainer = ({ title }) => {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
    
        setOpen(!open);
        console.log("clicked");

    }

    return (
        <div className="ExpandContainer">

            <div className="ExpandContainerTitle" onClick={handleClick}>
                <p className="ExpandContainerTitleHead">{title}</p>
                <ExpandMoreIcon className={open? "ExpandContainerarrow": ""} />
            </div>
            <Divider />

            <div className={`${open ? "ExpandContainerContentOpen" : "ExpandContainerContent"}`}>

                <div className="ExpandContainerContentForProductDescription">

                    <p className="ExpandContainerContentForProductDescriptionHead">Product Highlights</p>

                    <div className="ExpandContainerContentForProductDescriptionHighlights">
                        <p className="ExpandContainerContentForProductDescriptionHighlightsPara"><span className="ExpandContainerContentForProductDescriptionHighlightsParaBold">Fabric</span> - 240 GSM Heavy Gauge, Bio-Washed Cotton </p>
                        <p className="ExpandContainerContentForProductDescriptionHighlightsPara"><span className="ExpandContainerContentForProductDescriptionHighlightsParaBold">Fabric</span> - 240 GSM Heavy Gauge, Bio-Washed Cotton </p>
                        <p className="ExpandContainerContentForProductDescriptionHighlightsPara"><span className="ExpandContainerContentForProductDescriptionHighlightsParaBold">Fabric</span> - 240 GSM Heavy Gauge, Bio-Washed Cotton </p>
                    </div>

                    <p className="ExpandContainerContentForProductDescriptionHead">Product Description</p>                    
                    <div className="ExpandContainerContentForProductDescriptionPara">
                        <p className="ExpandContainerContentForProductDescriptionParaPara">Heavy Gauge 100% Bio-washed Cotton – makes the fabric extra soft & silky</p>
                    </div>

                    <p className="ExpandContainerContentForProductDescriptionHead">Wash Care</p>
                    <div className="ExpandContainerContentForProductDescriptionPara">
                        <p className="ExpandContainerContentForProductDescriptionParaPara">Gentle machine wash</p>
                        <p className="ExpandContainerContentForProductDescriptionParaPara">Gentle machine wash</p>
                        <p className="ExpandContainerContentForProductDescriptionParaPara">Gentle machine wash</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ExpandContainer;