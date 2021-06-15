const express = require('express');
const router = express.Router();

const apiUrl = process.env.API_URL || 'http://localhost:3000/api/';
const rootUrl = process.env.ROOT_URL || 'http://localhost:3000/';

router.get('/', (req, res) => {
    res.render('index.ejs', { apiUrl, rootUrl });
});

module.exports = router;
