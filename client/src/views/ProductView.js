import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';


const ProductView = (props) => {
    
    const {products, setproducts} = props;
    const [product, setProduct] = useState({});

    useEffect(() =>{
        Axios.get('http://localhost:8000/api/products/'+ props.id)
            .then((res) => setProduct(res.data))
            .catch(err => console.log(err));
    } ,[])

    function deleteProduct(id){
        Axios.delete('http://localhost:8000/api/products/'+id)
            .then(() =>{
                setproducts(products.filter(product => product._id !== id));
                navigate('/');
            } )
            .catch(err => console.log(err));
    }

    return ( 
        <div className="container">
            <div className="row my-2 text-center">{product.title}</div>
            <div className="row my-2 text-center">Price: ${product.price}</div>
            <div className="row my-2 text-center">Description: {product.description}</div>
            <div className="row my-2 text-center">
                <DeleteButton products = {products} setproducts={setproducts} productId={product._id}/>
            </div>
        </div>
     );
}
 
export default ProductView;