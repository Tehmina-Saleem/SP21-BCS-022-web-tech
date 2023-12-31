const prductmodel= require ("./models/productmodel");   
const createproducts= async(title, price, tags)=>{
console.log("poroducts created");
let product= new productmodel();
product.title= title;
product.price= price;
product.tags= tags;
await product.save();
return product
}
module.exports.create= createproducts;