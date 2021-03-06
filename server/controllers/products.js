const mongoose = require("mongoose");
const Product = mongoose.model("Product");

module.exports = {
   getAll: (req, res) => {
      Product.find({}, (err, data) => {
         if(err) {
            // console.log(err);
            res.json({message: "Error", error: err});
         }
         else {
            res.json({message: "Success", data: data});
         }
      }).sort({type:1})
   },

   category:(req,res)=>{
      // console.log('from category: ', req.params.category);

      Product.find({category:req.params.category},(err,data)=>{
         if(err){
            res.json({message: "Error", data: err});
         }else{
            // console.log(data);
            res.json({message: "Success", data: data});
         }
      })
   },

   name:(req,res)=>{
      // console.log('from name: ',req.params.name);
      Product.find({name:req.params.name},(err,data)=>{
         if(err){
            res.json({message:'Error',data:err});
         }else{
            res.json({message:'Success',data:data});
         }
      });
   },
   
   getOne: (req, res) => {
      Product.findById({_id: req.params.id}, (err, data) => {
         if(err) {
            // console.log(err);
            res.json({message: "Error", error: err });
         }
         else {
            res.json({message: "Success", data: data});
         }
      });
   },

   create: (req, res) => {
      var new_product = new Product(req.body);
      new_product.save((err, data) => {
         if(err) {
            // console.log(err);
            res.json({message: "Error", error: err });
         }
         else {
            res.json({message: "Success", data: data});
         }
      });
   },

   update: (req, res) => {
      // console.log(req);
      Product.findByIdAndUpdate({_id: req.params.id}, req.body, {runValidators: true, context: 'query'}, (err, data) => {
         if(err) {
            console.log(err);
            res.json({message: "Error", error: err});
         }
         else {
            res.json({message: "Success", data: data});
         }
      });
   },

   delete: (req, res) => {
      Product.findByIdAndDelete({_id: req.params.id}, (err) => {
         if(err) {
            // console.log(err);
            res.json({message: "Error", error: err});
         }
         else {
            res.json({message: "Success"});
         }
      });
   }



}