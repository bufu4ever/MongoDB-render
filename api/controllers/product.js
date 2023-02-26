module.exports = {
    GetAllProducts : (req,res)=>{
        const ProductModel = require('../models/product');
        ProductModel.find().then((products)=>{
            console.log(products);
            return res.status(200).render('products',{layout:'page',products});
            });
    },
    GetAllProductById : (req,res) =>{ 
        const ProductModel = require('../models/product');
        ProductModel.findOne({"Pid":req.params.id}).then((products)=>{
            console.log(products);
            return res.status(200).render('product', {layout:'page',products });
        })
    },
    AddProduct : (req,res)=>{
        const ProductModel = require('../models/product');
        ProductModel.insertMany(req.body).then((result)=>{
            console.log(result);
            return res.status(200).render('product',{layout:'page',result})})
    },
    UpdateProduct : (req,res)=>{
        const ProductModel = require('../models/product');
        const Pid = req.body.Pid;
        const Pname = req.body.Pname;
        const Price = req.body.Price;
        const Brand = req.body.Pdesc;
        ProductModel.updateOne({Pid:Pid},{Pname:Pname,Price:Price,Brand:Brand}).then((products)=>{
            console.log(products);
            return res.status(200).render('product',{layout:'page',products});
        });
    },
    DeleteProduct : (req,res)=>{
        const ProductModel = require('../models/product');
        ProductModel.deleteOne({"Pid":req.params.id}).then((products)=>{
            console.log(products);
            return res.status(200).render('product',{layout:'page',products});
            });
    }
};
