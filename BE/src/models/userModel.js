import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    title: String,
    description: String,
    price: Number

});

export const usertModel = mongoose.model('User', userSchema);