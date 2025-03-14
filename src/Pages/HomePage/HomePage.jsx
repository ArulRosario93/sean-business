import React from "react";
import "./HomePage.css";
import BigItemContainer from "../../Components/BigItemContainer/BigItemContainer";

const HomePage = () => {

    const products = [
        { id: 1, name: "Product 1", image: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D", secondary: "https://www.ganni.com/dw/image/v2/AAWT_PRD/on/demandware.static/-/Sites-ganni-master-catalogue/default/dwb292e4cf/images/images/model/T4090_3683_868_1.jpg?sh=1200", price: 100 },
        { id: 2, name: "Product 2", image: "https://thumbs.dreamstime.com/b/beautiful-sexy-woman-brunette-hair-glamour-model-wear-pants-jacket-suit-work-office-style-dress-code-accessory-jewelry-studio-166270434.jpg", secondary: "https://images.asos-media.com/products/new-look-oversized-t-shirt-in-indigo/201985676-4?$n_640w$&wid=513&fit=constrain", price: 200 },
        { id: 3, name: "Product 3", image: "https://thumbs.dreamstime.com/b/beautiful-fashion-woman-full-length-portrait-beautiful-girl-wearing-light-gray-suit-black-hat-posing-indoor-over-deep-274758475.jpg", secondary: "https://images.asos-media.com/products/jack-jones-originals-oversized-t-shirt-in-light-blue/202346872-4?$n_640w$&wid=513&fit=constrain", price: 300 },
        { id: 4, name: "Product 4", image: "https://media.istockphoto.com/id/942164018/photo/young-fashionable-woman-akimbo-in-white-suit-posing-on-dark-backdrop.jpg?s=612x612&w=0&k=20&c=SuABzSQ8eOiZaOPsGr5h8B-RuXtdQeX-Hg4w8cNrayI=", secondary: "https://www.ganni.com/dw/image/v2/AAWT_PRD/on/demandware.static/-/Sites-ganni-master-catalogue/default/dwb292e4cf/images/images/model/T4090_3683_868_1.jpg?sh=1200", price: 400 },
        { id: 5, name: "Product 5", image: "https://www.clotheboutique.com/cdn/shop/files/Screenshot2024-05-04at1.16.56PM.png?v=1714847210", secondary: "https://threadheads.com/cdn/shop/files/white-oversized2_736a2ab0-44c7-4546-a815-4da13a2faab8.jpg?v=1714698606&width=2000", price: 500 },
        { id: 6, name: "Product 6", image: "https://www.ryderwear.com/cdn/shop/products/advance-oversized-t-shirt-black-clothing-ryderwear-285430_1024x1024.jpg?v=1671085618", secondary: "https://img.joomcdn.net/dfbbf14b0cd128faac19a9745e4362eb560c035f_original.jpeg", price: 600 },
        { id: 7, name: "Product 7", image: "https://www.ryderwear.com/cdn/shop/products/advance-oversized-t-shirt-black-clothing-ryderwear-285430_1024x1024.jpg?v=1671085618", secondary: "https://my-couple-goal.com/cdn/shop/files/CouplesOversizedTShirt5_2000x.webp?v=1702657520", price: 700 },
        { id: 8, name: "Product 8", image: "https://www.clotheboutique.com/cdn/shop/files/Screenshot2024-05-04at1.16.56PM.png?v=1714847210", secondary: "https://bleusalt.com/cdn/shop/files/Mens---lite---Oversized-tee---black0052.jpg?crop=center&height=550&v=1714719300&width=550", price: 800 },
        { id: 9, name: "Product 9", image: "https://threadheads.com/cdn/shop/files/OversizedTee1.jpg?v=1729660869&width=2000", secondary: "https://images.asos-media.com/products/weekday-2-pack-oversized-t-shirts-in-beige-and-brown/204577925-4?$n_640w$&wid=513&fit=constrain", price: 900 },
    ];

    return (
        <div className="HomePage">

            <h2 className="HomePageHead">Modern Clothing</h2>
            <div className="HomePageCollections">
                {
                    products.map((item, i) => <BigItemContainer key={i} image={item.image} secondary={item.secondary} name={item.name} price={item.price} />)
                }
            </div>
        </div>
    );
};

export default HomePage;