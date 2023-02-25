module.exports = {
    GetAllProducts : (req,res)=>{
        const ProductModel = require('../models/product');
        ProductModel.find().then((products)=>{
            console.log(products);
            return res.status(200).json(products);
            });
    },
    GetAllProductById : (req,res) =>{ 
        const ProductModel = require('../models/product');
        ProductModel.findOne({"Pid":req.params.id}).then((products)=>{
            console.log(products);
            return res.status(200).json(products);
        })
    },
    AddProduct : (req,res)=>{
        const ProductModel = require('../models/product');
        ProductModel.insertMany(req.body).then((result)=>{
            console.log(result);
            return res.status(200).json(result)})
    },
    UpdateProduct : (req,res)=>{
        const ProductModel = require('../models/product');
        const Pid = req.body.Pid;
        const Pname = req.body.Pname;
        const Price = req.body.Price;
        const Pdesc = req.body.Pdesc;
        const PicName = req.body.PicName;
        ProductModel.updateOne({Pid:Pid},{Pname:Pname,Price:Price,Pdesc:Pdesc,PicName:PicName}).then((products)=>{
            console.log(products);
            return res.status(200).json(products);
        });
    },
    DeleteProduct : (req,res)=>{
        const ProductModel = require('../models/product');
        ProductModel.deleteOne({"Pid":req.params.id}).then((products)=>{
            console.log(products);
            return res.status(200).json(products);
            });
    }
};
