# ecommerce-api
An ecommerce api use to manage product inventory 
### Hosted URL: https://e-commerce-dzpi.onrender.com

## Installation
To install ecommerce-api, please follow these steps:

Clone this repository using the following command:
```
$ git clone (https://github.com/shrobonbharui/e-commerce.git)
```
Install the required dependencies using the following command:
```
$ npm install 
```
Start the application using the following command:
```
$ npm start
or
$ nodemon server.js
```
Open the application in your web browser by visiting the following URL:
```
$ http://localhost:3010 
```
## Features
* Create a product by : URL:" http://localhost:3010/products/create ", Method:POST and passing req.body in raw json format as. 
{"name":"laptop","quantity":10}. 
* Get all products by : URL:" http://localhost:3010/products ", Method:GET. 
* Get any particular product by: URL:" http://localhost:3010/products/products_id ", Method:GET.
* delete a product by : URL:" http://localhost:3010/products/products_id ", Method:DELETE.
* Update a product by : URL:"http://localhost:3010/products/products_id/update_quantity/?number=Quantity number", Method:POST/PUT . 
