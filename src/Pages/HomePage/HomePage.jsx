import React, { useEffect } from "react";
import "./HomePage.css";
import CheckOut from "../../Components/Widgets/CheckOut/CheckOut";
import ShowCase from "../../Components/Widgets/ShowCase/ShowCase";
import WishList from "../../Components/Widgets/WishList/WishList";
import AuthenticationPage from "../AuthenticationPage/AuthenticationPage";

const HomePage = () => {

    const [data, setData] = React.useState([]);

    const handlefunction = async (e) => {
        // Fetch data from the server (if needed)
        const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/products`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res.json());

        setData(res);
        console.log(res);
    }

    useEffect(() => {
        handlefunction();
    }, [])

    return (
        <div className="HomePage">

            {/* <CheckOut /> */}

            <AuthenticationPage />

            <ShowCase product={data?.slice(0, 4)} />
            <ShowCase product={data?.slice(4, 8)} />
            <ShowCase product={data?.slice(8, 12)} />

        </div>
    );
};

export default HomePage;