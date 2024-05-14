const product = require('../models/product');

// get all products
async function getAllProductData(req,res) {
    try{
        const products = await product.find();
        res.status(201).json({products:products});
    }
    catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'Internal server error' });
    };
};


// get product by id
async function getProductDataById(req,res) {
    try{
        const products = await product.findById(req.params.id);
        res.status(201).json({products:products});
    }
    catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'Internal server error' });
    };
};


// create product data
async function createProductData(req,res) {
    try{
     const newProduct = new product(req.body);

      // Save the new product to the database 
      const saveData = await newProduct.save();
      console.log('Saved person to database');
      res.status(201).json({product:saveData});
    }
    catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'Internal server error' });
    };
};

async function updatedProductData(req,res) {
    try {
        const productId = req.params.id; // Extract the person's ID from the URL parameter
        const newNumber = req.query.number; // Updated data for the product

        if (!newNumber) {
            res.status(500).json({ data: { message: "Param number is required for incrementing or decrementing the quantity of product" } });
            return;
        }
        const findproduct = await product.findOne({ _id: productId });
        let newQuantity = findproduct.quantity + (+newNumber);

        if (newQuantity >= 0) {
            // Assuming you have a Person model
        const updatedProduct = await product.findByIdAndUpdate({ _id: productId},{ quantity: newQuantity},{
            new: true, // Return the updated document
            runValidators: true, // Run Mongoose validation
        });
            // Send the updated person data as a JSON response
            res.status(200).json({ data: { updatedProduct, message: "Successfully updated" } });
        }
        else {
            res.status(400).json(
                {
                    data:{ message: "Total Quantity cannot be less than zero" }
                });
            return;
        }
        
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

async function deleteProduct(req,res){
    try {
        const productId = req.params.id; // Extract the person's ID from the URL parameter
        // Assuming you have a Person model
        const deletedPerson = await product.deleteOne({"_id":productId});
        if (!deletedPerson) {
            return res.status(404).json({ error: 'Product not found' });
        }
        // Send a success message as a JSON response
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = {createProductData, getAllProductData, getProductDataById, updatedProductData, deleteProduct};