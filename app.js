const express = require ('express');
const app=express();
const hbs = require('express-handlebars').engine;
const moragan = require('morgan');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(moragan('dev'));

app.set('views','./views');

app.engine( 'hbs', hbs( {
 extname: 'hbs',
 defaultView: 'index',
 layoutsDir: __dirname + '/views/layouts/',
 partialsDir: __dirname + '/views/partials/'
 }));
app.set('view engine', 'hbs'); 

app.use(express.static('public'));
const Productrouter = require("./api/routes/product");
const mongoose = require('mongoose');


mongoose.set('strictQuery', true);
const Conn_str = `mongodb+srv://shawnDB:bufu4ever@cluster0.lssdz12.mongodb.net/ecomdb`;
mongoose.connect(Conn_str);
app.use("/product", Productrouter);

app.get('/contact',(req,res)=>{
    res.render('contact',{layout:'page'});
});
app.get('/gallery',(req,res)=>{
    res.render('gallery',{layout:'page'});
});
app.get('/products',(req,res)=>{
        res.render('products',{layout:'page'});
    });


module.exports=app;