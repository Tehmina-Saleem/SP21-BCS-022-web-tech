const mongoose= require("mongoose")
const productsschema= mongoose.Schema({
    title:String,
    price:Number,
    tags:[String],

});
const productmodel= mongoose.model("productmodel", productsschema);
module.exports= productmodel;