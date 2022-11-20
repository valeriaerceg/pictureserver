const express = require('express');
const app = express();
const path = require('path');
const home = express.Router();
const res = require('express/lib/response');
const { restart } = require('nodemon');
const fs = require('fs');

function includePNG(file) { 
    return file.includes('png') && !file.includes('VE icon');
}

home.get('/', async function (req,res) {
    res.render('home');
});
home.get('/images', async function (req,res) {

    //joining path of folder 
    const folderPath = path.join(__dirname, 'public/images');
    //passsing folderPath and callback function
    fs.readdir(folderPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan folder: ' + err);
        } 
        return res.status(200).json({ 'files': files.filter(includePNG) });
    });
})

home.get('/makeup', async function (req,res) {
    console.log("Hitting makeup endpoint");
    res.render('makeup');
});
home.get('/style', async function (req,res) {
    console.log("Hitting style endpoint");
    res.render('style');
});
home.get('/skincare', async function (req,res) {
    console.log("Hitting skincare endpoint");
    res.render('skincare');
});
module.exports = home;