console.clear();
const express = require('express');
const app = express();
const mongoose= require("mongoose");
const { createproducts }= require("./productsoperations");
const port = 40000;
app.use(express.json());
mongoose.connect("mongodb://localhost/mern",{
    usenewurlparser:true,
    useunifiedtopology:true,
})
.then (async()=>{
    console.log("Successfuly connection to mongodb created");
   let product= await createproducts("hp", 9000, ["great", "gorgeous"]);
   console.log(product)
})

    
.catch((err)=>{
    console.log("Error connecting");
     console.log(err);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})






// const products= ["laptops", "mobiles", "chargers"]

// app.get("/", function (req, res) {
//     res.send("Hello World");
//   });
// //first parameter is url and second parameter is functiom with two inputs;
// app.get("/api/products/:index", function (req, res) {
//     res.send(products);
//   });
//   app.put("/api/products/:index", function (req, res) {
//    console.log(req.body);
//     // products[req.params.index] = req.body.name;
//     res.send(products);
//   });
//   app.delete("/api/products/:index", function (req, res) {
//     products.splice(req.params.index, 1)
//      products[req.params.index] = req.body.name;
//     //  res.send(products);
//    });
//    app.post("/api/products", function (req, res) {
//     products.push(req.body.name);
//     //  products[req.params.index] = req.body.name;
//      res.send(products);
//    });