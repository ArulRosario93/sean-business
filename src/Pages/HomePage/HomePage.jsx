import React, { useEffect } from "react";
import "./HomePage.css";
import CheckOut from "../../Components/Widgets/CheckOut/CheckOut";
import ShowCase from "../../Components/Widgets/ShowCase/ShowCase";

const HomePage = () => {

    const [data, setData] = React.useState([]);

    const handlefunction = async (e) => {
        // Fetch data from the server (if needed)
        const res = await fetch('http://localhost:5000/products', {
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

            <CheckOut />

            {/* <ShowCase product={data?.slice(0, 4)} />
            <ShowCase product={data?.slice(4, 8)} />
            <ShowCase product={data?.slice(8, 12)} /> */}

        </div>
    );
};

export default HomePage;