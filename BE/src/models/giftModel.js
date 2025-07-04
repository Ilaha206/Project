import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({
    image: String,
    title: String,
    description: String,
    contact: {
        phone: {
            type: String,
            required: false
        },
        instagram: {
            type: String,
            required: false
        }
    },
    price: Number,
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    }
});

export const productModel = mongoose.model('Product', productSchema);