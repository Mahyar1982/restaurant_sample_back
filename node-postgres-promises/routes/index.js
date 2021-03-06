var express = require('express');
var router = express.Router();

/* GET home page. */

var db = require('../queries');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/foodfi', db.getAllFoodsFinnish);
router.get('/api/menufi', db.getAllMenuesFinnish);
router.get('/api/fooden', db.getAllFoodsEnglish);
router.get('/api/menuen', db.getAllMenuesEnglish);
// router.get('/api/order', db.getAllOrders);
// router.post('/api/order', db.createOrder);
// router.put('/api/order/:id', db.updateOrder);
// router.delete('/api/order/:id', db.deleteOrder);

// router.get('/api/adora', db.getAllProductsId);
// router.get('/api/adoraCode', db.getAllProductsCode);
// router.get('/api/adoraName', db.getAllProductsName);
// router.get('/api/adoraQty', db.getAllProductsQty);
// router.get('/api/adoraPrice', db.getAllProductsPrice);
// router.get('/api/adora/:id', db.getSingleProduct);
// router.post('/api/adora', db.createProduct);
// router.put('/api/adora/:id', db.updateProduct);
// router.delete('/api/adora/:id', db.removeProduct);
//
// router.get('/api/users', db.getAllUsers);
// router.post('/api/users', db.createUser);
// router.put('/api/users/:id', db.updateUser);
// router.delete('/api/users/:id', db.removeUser);

module.exports = router;
