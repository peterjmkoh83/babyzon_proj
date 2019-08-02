const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require('bcrypt');

module.exports = {
   allUser: (req, res) => {
      User.find({}, (err, data) => {
         if(err) {
            console.log(err);
            res.json({message: "Error", error: err});
         }
         else {
            res.json({message: "Success", data: data});
         }
      });
   },
   createUser: (req, res) => {
      console.log('new user from createUser: ', req.body);
      console.log('password:', req.body.password);
      var new_user = new User(req.body);
      new_user.save((err, data) => {
         if(err) {
            console.log("Err from create: ",err);
            res.json({message: "Error", error: err });
         }
         else {
            bcrypt.hash(req.body.password,10)
            .then(hasedPassword=>{
                  User.findOneAndUpdate({email:req.body.email},{$set:{password:hasedPassword}},(err,data)=>{
                     if(err){
                        res.json({message:'Err',error: err});
                     }else{
                        res.json({message:'Success',data:data});
                     }
                  })
               console.log("hased password" ,hasedPassword);
            })
            .catch(err=>{
               console.log('err: ',err);
            });
            // res.json({message: "Success", data: data});
         }
      });
   },
   
   getOneUser: (req, res) => {
      console.log('req.body from getOneUser: ',req.body);

      User.findOne({email:req.body.login_email}, (err, data) => {
         console.log('data data: ',data);
         console.log('error error: ',err);
         if(!data) {
            console.log('asdfasdfdsfafsd',err);
            res.json({message: "Error", error: {email:'Invalid email.'}});
         }
         else {
            console.log('have data')
            if (req.body.login_password === data['password']) {
               console.log('data data data: ', data);
               res.json({message: "Success", data: data});
            } 
            else {
               res.json({message: "Error", error: {password:'Invalid password'}});
            }
         }
      });
   },

   updateUser: (req, res) => {
      console.log(req);
      User.findByIdAndUpdate({_id: req.params.id}, req.body, {runValidators: true, context: 'query'}, (err, data) => {
         if(err) {
            console.log(err);
            res.json({message: "Error", error: err});
         }
         else {
            res.json({message: "Success", data: data});
         }
      });
   },

}