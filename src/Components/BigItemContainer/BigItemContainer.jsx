
import React from "react";
import "./BigItemContainer.css";

const BigItemContainer = ( props ) => {

    console.log(props.secondary);

    return (
        <div className="BigItemContainer">
            <div className="BidItemContainerImg">
                <img src={props.image} alt="" srcset="" />
                
                <div className="BigItemContainerContentSceondaryImg">
                    <img src={props.secondary} alt={props.secondary} />
                </div>
            </div>


            <div className="BigItemContainerContent">
                <h3 className="BigItemContainerContentHead">{props.name}</h3>
                <p className="BigItemContainerContentPara"><span className="BigItemContainerContentLineThrough">Rs: {props.price}</span> Rs: {props.price   }</p>
            </div>
        </div>
    );
}

export default BigItemContainer;