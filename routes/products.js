const express = require('express');
const getProducts = require('../controllers/products.js'); 

const router = express.Router();

router.get('/', getProducts);