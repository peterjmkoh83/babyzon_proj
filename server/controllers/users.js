const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = {
   createUser: (req, res) => {
      console.log('new user from createUser: ', req.body);

      var new_user = new User(req.body);
      new_user.save((err, data) => {
         if(err) {
            console.log("Err from create: ",err);
            res.json({message: "Error", error: err });
         }
         else {
            res.json({message: "Success", data: data});
         }
      });
   },
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
   getOneUser: (req, res) => {
      console.log('req.body from getOneUser: ',req.body);
      
      User.findOne({email: req.body.email}, (err, data) => {
         if(err) {
            console.log(err);
            res.json({message: "Error", error: err});
         }
         else {
            if (req.body.password === data.password) {
               res.json({message: "Success", data: data});
            } 
            else {
               res.json({message: "Error", error: err})
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