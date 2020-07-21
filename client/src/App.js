import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import { Router } from '@reach/router';
import Main from './views/Main';
import ProductView from './views/ProductView';

function App() {

  const [products, setproducts] = useState([]);

  useEffect(() =>{
    Axios.get("http://localhost:8000/api/products")
        .then((res) => setproducts(res.data))
        .catch((err) => console.log(err));
  }, [])

  return (
    <div className="App">
      <Router>
        <Main path="/" products={products} setproducts={setproducts}/>
        <ProductView path="/:id"/>
      </Router>
      
    </div>
  );
}

export default App;
