const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
   name: {
      type: String, 
      required: [true, "Name is required"], 
      minlength: [2, "Name must be at least 2 characters"]
   },
   qty: {
      type: Number, 
      required: [true, "Quantity is required"], 
      min: [0, "Quantity must be greater or equal to 0"]
   },
   category: {
      type: String,
      require: [true, "Category is required"],
      minlength: [2, "Category must be at least 2 characters"]
   },
   price: {
      type: Number, 
      required: [true, "Price is required"],
      min: [0, "Price must be greater or equal to 0"]
   },
   desc: {
      type: String,
      required: [true, "Description is required"],
      minlength: [3, "Description must to be at least 3 characters"]
   }

},
{timestamps: true});

