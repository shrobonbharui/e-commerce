// import mongoose
const mongoose = require('mongoose');

// Create schema
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    quantity:{
        type:Number,
    }
},{
    versionKey: false
  }
);

// Create model
const Product = mongoose.model('Products', productSchema);

// Exporte model
module.exports = Product;
