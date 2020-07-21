import React from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';



const DeleteButton = (props) => {
    
    const {productId, setproducts, products} = props;

    function deleteProduct(){
        Axios.delete('http://localhost:8000/api/products/'+productId)
            .then(() => {
                setproducts(products.filter(product => product._id != productId));
                navigate('/');
            })
            .catch(err => console.log(err));
    }
    
    return ( 
        <button onClick={deleteProduct} className="btn btn-danger">Delete</button>
     );
}
 
export default DeleteButton;