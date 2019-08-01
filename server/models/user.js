const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const UserSchema = new mongoose.Schema({
   first_name: { 
      type: String, 
      required: [true, "Please enter your first name"], 
      validate: {
         validator: function(value) {
            return /^[A-z]+$/.test(value)
         },
         message: "Please enter a valid first name"
      }
   },
   last_name: { 
      type: String, 
      required: [true, "Please enter your last name"],
      validate: {
         validator: function(value) {
            return /^[A-z]+$/.test(value)
         },
         message: "Please enter a valid last name"
      }
   },
   email: { 
      type: String, 
      required: [true, "Please enter an email"], 
      unique:true,
      validate: {
         validator: function(value){
            return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(value)
         },
         message: "Please enter a valid email address"
      }
   },   
   password: { 
      type: String, 
      required: [true, "Please enter a password"],
      minlength: [6, "Password needs to be at least 6 characters"],
      validate: {
			validator: function(value){
				return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value);
			},
			message: "Password must contain at one lowercase, uppercase, and number"
      } 
   },
   
},
{timestamps: true});

UserSchema.plugin(uniqueValidator,{message:'Email is taken'});

mongoose.model('User', UserSchema);


