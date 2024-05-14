require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || "3100" ;
const db = require('./config/mongodb');
const bodyParser = require('body-parser');
const productRouter = require('./routes/productRouter')

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
// middlewares
app.use(bodyParser.json());
app.use("/products", productRouter);

