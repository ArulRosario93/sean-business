
import React from 'react';
import { useLocation } from 'react-router-dom';
import './PresentPage.css';

const PresentPage = () => {

    const location = useLocation();
    const { pathname } = location;

    const path = pathname.split('/').join('  > ').replace(' ', 'Home ').replace('products', 'Products ').replace("%20", " ");
    const pathArray = path.lastIndexOf(">") == path.length - 2 ? path.slice(0, path.length - 2) : path;
    
    return <p className='PresentPagePara'>{pathArray}</p>
}

export default PresentPage;