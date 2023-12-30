const mongoose= require("mongoose")
const productsschema= mongoose.schema({
    title:"string",
    price:number,
    tags:[string],

});
const productmodel= mongoose.model("productmodel", productschema)