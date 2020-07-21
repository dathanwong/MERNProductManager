const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/api/index', ProductController.index);
    app.get('/api/products', ProductController.findAll);
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products/:id', ProductController.findById);
    app.delete('/api/products/:id', ProductController.deleteById);
    app.put('/api/products/:id', ProductController.updateProduct);
}