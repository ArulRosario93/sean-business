
import React from "react";
import "./SuggestionItem.css";
import SuggestionContainer from "./SuggestionContainer/SuggestionContainer";

const SuggetionItem = ({ SuggestedList }) => {

    return (
        <div className="SuggestionItem">

            <p className="SuggestionItemTitlePara">You Might Also Like</p>

            <div className="SuggestionItems">
                {
                    SuggestedList.map((item, index) => {
                        
                        if (index > 10) {
                            return;
                        }

                        return (
                            // <h1>hi</h1>
                            <SuggestionContainer key={index} finalPrice={item.finalPrice} title={item.title} img={item.images[0]} product={item}  />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default SuggetionItem;