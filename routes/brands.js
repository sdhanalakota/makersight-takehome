const express = require('express');
const getBrands = require('../controllers/brands.js'); 

const router = express.Router();

router.get('/shikebrand', getBrands);