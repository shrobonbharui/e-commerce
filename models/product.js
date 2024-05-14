// import mongoose
const mongoose = require('mongoose');

// Create schema
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true, 
        unique : true
    },
    quantity:{
        type:Number,
        required: true,
        default: 1
    }
},{
    versionKey: false
  }
);

// Create model
const Product = mongoose.model('Products', productSchema);

// Exporte model
module.exports = Product;
