import React from 'react';
import {Link} from '@reach/router';

const AllProducts = (props) => {

    const {products} = props;
    console.log(products);

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
                </div>
                );} 
            )
            }
            
        </div>
     );
}
 
export default AllProducts;