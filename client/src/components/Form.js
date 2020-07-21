import React, {useState} from 'react';

const Home = (props) => {

    const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props;

    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    

    function handleSubmit(e){
        e.preventDefault();
        const newProduct = {
            title,
            price, 
            description
        }
        onSubmitProp(newProduct);
    }

    return (  
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
    );
}
 
export default Home;