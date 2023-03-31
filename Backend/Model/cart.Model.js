const mongoose = require("mongoose")


const cartSchema = mongoose.Schema({
    image: String,
    title: String,
    price: Number,
    gender: String,
    category: String,
    brand: String
    
    
})

const cartModel = mongoose.model("cartItem",cartSchema)

module.exports = {cartModel}