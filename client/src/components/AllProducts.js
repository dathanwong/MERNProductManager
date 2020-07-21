import React from 'react';
import {Link, navigate} from '@reach/router';
import DeleteButton from './DeleteButton';

const AllProducts = (props) => {

    const {products, setproducts} = props;
    console.log(products);

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
                    <DeleteButton products={products} setproducts={setproducts} productId={product._id} />
                </div>
                );} 
            )
            }
            
        </div>
     );
}
 
export default AllProducts;