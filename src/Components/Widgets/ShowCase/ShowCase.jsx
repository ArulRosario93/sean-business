
import React from "react";
import "./ShowCase.css";
import BigItemContainer from "../../BigItemContainer/BigItemContainer";

const ShowCase = ({ product }) => {

    return (
        <div className="showcase">

            <h1 className="showcaseHead">New Arrivals</h1>
            <div className="showcaseContainer">
                
                { 
                    product.map((item, index) => {
                        return (
                            <BigItemContainer product={item} key={index} name={item.title} image={item.images[0]} secondaryImage={item.images[1]} price={item.finalPrice} sizes={item.sizes}  />
                        )
                    })
                }

            </div>

        </div>
    );
}

export default ShowCase;