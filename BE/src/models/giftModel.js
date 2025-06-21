import mongoose, {Schema} from "mongoose";

const productSchema = new mongoose.Schema({
  image: String,
  title: String,
  description: String,
  contact: {
    phone: {
      type: String,
      required: false // istəyə bağlıdır
    },
    instagram: {
      type: String,
      required: false // istəyə bağlıdır
    }
  },
  price: Number

});

 export const productModel = mongoose.model('Product', productSchema);