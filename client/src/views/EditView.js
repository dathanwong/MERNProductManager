import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';

const EditView = (props) => {

    const{setproducts} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    useEffect(() =>{
        Axios.get('http://localhost:8000/api/products/'+props.id)
            .then((res) =>{
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            } )
            .catch((err) => console.log(err));
    }, [])

    function handleSubmit(e){
        e.preventDefault();
        const product = {
            title,
            price,
            description
        };
        Axios.put('http://localhost:8000/api/products/'+props.id, product)
            .then(res =>{
                console.log(res);
                navigate('/');
            } )
            .catch(err=>console.log(err));
    }

    return ( 
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row text-center">
                    <label>Title:</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div className="row text-center">
                    <label>Price:</label>
                    <input type="number" value={price} onChange={e => setPrice(e.target.value)}/>
                </div>
                <div className="row text-center">
                    <label>Description:</label>
                    <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
                </div>
                <div className="row text-center">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
     );
}
 
export default EditView;