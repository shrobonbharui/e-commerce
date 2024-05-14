const express = require('express');
const router = require('express').Router();

const { createProductData, getAllProductData, getProductDataById, updatedProductData, deleteProduct} = require('../controllers/product_c');

// get all products
router.route("/").get(getAllProductData);

// get search product
router.route('/:id').get(getProductDataById);


// create new product data
router.route("/create").post(createProductData);

router.route("/:id/update_quantity/").put(updatedProductData);

router.route("/:id").delete(deleteProduct);

 module.exports = router;