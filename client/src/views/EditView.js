import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';
import Form from '../components/Form';

const EditView = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() =>{
        Axios.get('http://localhost:8000/api/products/'+props.id)
            .then((res) =>{
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                setLoaded(true);
            } )
            .catch((err) => console.log(err));
    }, [])

    function handleSubmit(newProduct){
        Axios.put('http://localhost:8000/api/products/'+props.id, newProduct)
            .then(res =>{
                console.log(res);
                navigate('/');
            } )
            .catch(err=>console.log(err));
    }

    return (
        loaded && ( 
        <div className="container">
            <Form onSubmitProp={handleSubmit} initialTitle = {title} initialPrice = {price} initialDescription={description}/>
        </div>)
     );
}
 
export default EditView;