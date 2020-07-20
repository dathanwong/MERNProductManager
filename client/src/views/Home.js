import React from 'react';

const Home = (props) => {
    return (  
        <div className="container">
            <div className="row text-center">
                <h1 className="col">Product Manager</h1>
            </div>
            <form>
                <div className="row">
                <div className="col text-center">
                    <label>Title</label>
                    <input type="text"/>
                </div>
                </div>
                <div className="row text-center">
                <div className="col text-center">
                    <label>Price</label>
                    <input type="text"/>
                </div>
                </div>
                <div className="row text-center">
                <div className="col text-center">
                    <label>Description</label>
                    <input type="text"/>
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