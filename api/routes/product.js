const router = require('express').Router();

const {GetAllProducts, GetAllProductById, UpdateProduct, AddProduct, DeleteProduct} = require('../controllers/product');

router.get("/",GetAllProducts);

router.get("/:id",GetAllProductById);

router.put("/:id",UpdateProduct);

router.post("/",AddProduct);

router.delete("/:id",DeleteProduct);


module.exports = router;