import React from "react";
import "./HomePage.css";
import data from "../../Components/data.jsx";
import ShowCase from "../../Components/Widgets/ShowCase/ShowCase";
import BigItemContainer from "../../Components/BigItemContainer/BigItemContainer";

const HomePage = () => {

    

    return (
        <div className="HomePage">

            <ShowCase product={data.slice(0, 4)} />
            <ShowCase product={data.slice(4, 8)} />
            <ShowCase product={data.slice(8, 12)} />

        </div>
    );
};

export default HomePage;