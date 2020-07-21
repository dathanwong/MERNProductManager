import React, {useState} from 'react';
import Axios from 'axios';

const Home = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const {products, setproducts} = props;

    function handleSubmit(e){
        e.preventDefault();
        const newProduct = {
            title,
            price, 
            description
        }
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
            <form onSubmit={handleSubmit}>
                <div className="row">
                <div className="col text-center">
                    <label>Title</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                </div>
                <div className="row text-center">
                <div className="col text-center">
                    <label>Price</label>
                    <input type="number" value={price} onChange={e => setPrice(e.target.value)}/>
                </div>
                </div>
                <div className="row text-center">
                <div className="col text-center">
                    <label>Description</label>
                    <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
                </div>
                </div>
                <div className="row text-center">
                <div className="col text-center">
                    <button className="btn btn-primary" type="submit">Create</button>
                </div>
                </div>
            </form>
        </div>
    );
}
 
export default Home;