
const controllers = {}

var sequelize = require('../models/database');
const db = require("../models");
const stock = db.Stock;
sequelize.sync()
controllers.delete = async (req,res) => {

    // parameter post
    
    // delete sequelize
    const del = await stock.destroy({
      where: { no: no }
    })
    res.json({success:true, deleted:del, message:"Deleted successful"});
  }
    controllers.update = async (req, res) => {
        // parameter id get
        const { no } = req.params;
        // parameter post
        const { } = req.body;
        // update data
        const data = await stock.update({
          
        },{
          where: { no: no }
        })
        .then( function (data){
          return data;
        })
        .catch(error => {
          return error;
        })
      
  }
  
  controllers.list = async (req,res) => {
    const data = await stock.findAll({
      
    })
    .then(function(data){
      return data;
    })
    .catch(error =>{
      return error;
    })
    res.json({ success: true, data:data });
  }
  controllers.create = async (req,res) => {
  
    // DATA parametros desde post
    const {productCategory,quantity } = req.body;
   
    //create
    const data = await stock.create({
      productCategory:productCategory,
      quantity:quantity,
      
  
    })
    .then(function(data){
      return data;
    })
    .catch(error=>{
      console.log(error)
      return error;
    })
    // return res
    res.status(200).json({
      success:true,
      message:"success",
      data:data
    })
  
  }
  controllers.getAvailableQuantityOfLenses =async (req,res) => {
    
    const availablequantity = await db.sequelize.query('select availablequantity as availablequantity from optika.stocks  where productCategory="Lenses"', {
    model: db.stock,
     type: sequelize.QueryTypes.SELECT
  })
  
    res.json({ success: true, availablequantity:availablequantity });
     
  }
  
  controllers.getAvailableQuantityOfProduct =async (req,res) => {
    
    const availablequantity = await db.sequelize.query('select availablequantity as availablequantity from optika.stocks where productCategory="Product"', {
    model: db.stock,
     type: sequelize.QueryTypes.SELECT
  })
  
    res.json({ success: true, availablequantity:availablequantity });
     
  }
  controllers.updateQuantityAfterInsertingData =async (req,res) => {
    const { qte } = req.params;
    const data = await db.sequelize.query('update stocks set  availablequantity=availablequantity-'+qte+' where no=1; ', {
      replacements: {qte: qte},
      model: db.stock,
     type: sequelize.QueryTypes.update
  })
  
    res.json({ success: true, data:data });
     
  }
module.exports = controllers;
