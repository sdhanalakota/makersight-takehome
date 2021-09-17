const express = require('express');
const app = express();
const productsList = require('./mockData.js');



const port = 5000;

app.get('/', (req, res) => {
    res.status(200).json(productsList);
});

app.listen(port, () => console.log(`server is started on ${port}`));
