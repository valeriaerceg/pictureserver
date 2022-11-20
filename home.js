const express = require('express');
const app = express();
const path = require('path');
const home = express.Router();
const res = require('express/lib/response');

home.get('/', async function (req,res) {
    res.render('home');
});

home.get('/makeup', async function (req,res) {
    console.log("Hitting makeup endpoint");
    res.render('makeup');
});


module.exports = home;