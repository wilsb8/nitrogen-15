const express = require("express");
const router = express.Router();
const path = require("path");
const reqPath = path.join(__dirname); 

router.get('/', (req, res) => {
    console.log(reqPath);
    res.sendFile(path.join(reqPath, 'views/index.html'));
});

router.get('/about', (req,res) => {
    console.log(reqPath);
    res.sendFile(path.join(reqPath, 'views/about.html'));
})

router.get('/service', (req, res) => {
    console.log(reqPath);
    res.sendFile(path.join(reqPath, 'views/service.html'));
})


router.get('/contact', (req,res) => {
    console.log(reqPath);
    res.sendFile(path.join(reqPath, '/views/contact.html'));
})

module.exports = router;