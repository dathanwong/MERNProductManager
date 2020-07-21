import React from 'react';
import Home from '../components/Home';
import AllProducts from '../components/AllProducts';

const Main = (props) => {
    
    const {products, setproducts} = props;
    
    return (  
        <>
            <Home products = {products} setproducts = {setproducts}/>
            <AllProducts products = {products} setproducts = {setproducts}/>
        </>
    );
}
 
export default Main;