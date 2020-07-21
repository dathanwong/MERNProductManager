import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import { Router } from '@reach/router';
import Main from './views/Main';
import ProductView from './views/ProductView';
import EditView from './views/EditView';

function App() {

  const [products, setproducts] = useState([]);

  useEffect(() =>{
    Axios.get("http://localhost:8000/api/products")
        .then((res) => setproducts(res.data))
        .catch((err) => console.log(err));
  }, [products])

  return (
    <div className="App">
      <Router>
        <Main path="/" products={products} setproducts={setproducts}/>
        <EditView path="/:id/edit" products={products} setproducts={setproducts}/>
        <ProductView path="/:id" products={products} setproducts={setproducts}/>
      </Router>
      
    </div>
  );
}

export default App;
