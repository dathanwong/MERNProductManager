import React, { useState, useEffect } from 'react';
import Axios from 'axios';


const ProductView = (props) => {
    
    const [product, setProduct] = useState({});

    useEffect(() =>{
        Axios.get('http://localhost:8000/api/products/'+ props.id)
            .then((res) => setProduct(res.data))
            .catch(err => console.log(err));
    } ,[])
    
    return ( 
        <div className="container">
            <div className="row text-center">{product.title}</div>
            <div className="row text-center">Price: ${product.price}</div>
            <div className="row text-center">Description: {product.description}</div>
        </div>
     );
}
 
export default ProductView;