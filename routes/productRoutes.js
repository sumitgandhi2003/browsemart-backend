const express = require("express");
const router = express.Router();
const addProduct = require("../controllers/productController/addProduct");
const getAllProduct = require("../controllers/productController/getAllProduct");
const getProductById = require("../controllers/productController/getProductById");
const getRelatedProduct = require("../controllers/productController/getRelatedProduct");
const submitReview = require("../controllers/reviewController/submitReview");
const userAuthentication = require("../middleware/userAuthentication");
router.route("/add-product").post(userAuthentication, addProduct);
router.route("/get-all-products").get(getAllProduct);
router.route("/get-product-by-id").post(getProductById);
router.route("/get-related-product").post(getRelatedProduct);

router.route("/submit-review").post(userAuthentication, submitReview);

module.exports = router;
