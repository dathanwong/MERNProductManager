const {Product} = require('../models/product.model');

module.exports.index = (req, res) =>{
    return res.json({message: "Hello"});
}

module.exports.findAll = (req, res) => {
    Product.find()
        .then((products) => res.json(products))
        .catch((err) => res.json({"Error": err}));
}

module.exports.createProduct = (req, res) => {
    console.log(req.body);
    const {title, price, description} = req.body;
    Product.create({
        title: title,
        price: price,
        description: description
    })
        .then((product) => {
            console.log(product);
            return res.json(product);
        })
        .catch((err) => console.log(err));
}

module.exports.findById = (req, res) =>{
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => console.log(err));
}