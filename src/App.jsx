import { useEffect, useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import ProductPage from './Pages/ProductPage/ProductPage';
import NavBar from './Components/Widgets/NavBar/NavBar';
import PresentPage from './Components/Widgets/PresentPage/PresentPage';
import AuthenticationPage from './Pages/AuthenticationPage/AuthenticationPage';
import AdminPage from './Pages/AdminPage/AdminPage';

function App() {

    const [wishList, setWishList] = useState([]);
    const [cart, setCart] = useState([]);

    const handleWishListAndCart = () => {
      

      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      const wishListItems = JSON.parse(localStorage.getItem('wishlist')) || [];

      setCart(cartItems);
      setWishList(wishListItems);

    }

      useEffect(() => {
          handleWishListAndCart();
      }, []);

    return (
      <Router>
        <NavBar cart={cart} wishList={wishList}/>
        {/* <PresentPage /> */}
        <Routes>
          <Route path="/admin"  element={<AdminPage />} />
          <Route path="/products/:id"  element={<ProductPage updateWishListCart={handleWishListAndCart} />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
  );
}

export default App
