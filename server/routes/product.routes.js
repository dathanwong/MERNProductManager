const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/api/index', ProductController.index);
    app.get('/api/products', ProductController.findAll);
    app.post('/api/products', ProductController.createProduct);
}