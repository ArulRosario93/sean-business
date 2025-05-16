
import React from 'react';
import { useLocation } from 'react-router-dom';
import './PresentPage.css';

const PresentPage = () => {

    const location = useLocation();
    const { pathname } = location;

    const path = pathname.split('/').join('  ').replace(' ', 'Home ').replace('products', 'Products ').replace("%20", " ");
    const pathArray = path.split(' > ');
    

    return <p className='PresentPagePara'>{path}</p>
}

export default PresentPage;