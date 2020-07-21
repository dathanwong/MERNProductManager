import React from 'react';
import Axios from 'axios';
import Form from './Form';

const Home = (props) => {

    const {products, setproducts} = props;

    function createProduct(newProduct){
        Axios.post("http://localhost:8000/api/products", newProduct)
            .then(res => {
                setproducts([...products, newProduct]);
            })
            .catch(err => console.log(err));
    }

    return (  
        <div className="container">
            <div className="row text-center">
                <h1 className="col">Product Manager</h1>
            </div>
            <Form onSubmitProp={createProduct}/>
        </div>
    );
}
 
export default Home;