import React from 'react';
import {Link, navigate} from '@reach/router';
import Axios from 'axios';

const AllProducts = (props) => {

    const {products, setproducts} = props;
    console.log(products);

    function deleteProduct(id){
        Axios.delete('http://localhost:8000/api/products/'+id)
            .then(() => setproducts(products.filter(product => product._id != id)))
            .catch(err => console.log(err));
    }

    function goToEdit(id){
        navigate('/'+id+'/edit');
    }

    return ( 
        <div className="container">
            <div className="row">
                <div className="col text-center">
                <h1>All Products</h1>
                </div>
            </div>
            { products.map((product) =>{
                return(
                <div key={product._id} className="row">
                    <Link className="col text-center" to={"/"+product._id}>{product.title}</Link>
                    <button onClick={e => goToEdit(product._id)} className="btn btn-primary">Edit</button>
                    <button onClick={e => deleteProduct(product._id)} className="btn btn-danger">Delete</button>
                </div>
                );} 
            )
            }
            
        </div>
     );
}
 
export default AllProducts;