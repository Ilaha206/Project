import express from "express"
import mongoose from "mongoose"
import cors from "cors";
import './config/config.js'
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

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

const productModel = mongoose.model('Product', productSchema);

app.get('/products', async (req, res) => {
  try {
    const gifts = await productModel.find({})
    res.send(gifts)
  } catch (error) {
    res.send(error.message)
  }

})

app.get('/products/:id', async (req, res) => {
  try {
    const { id } = req.params
    const gifts = await productModel.findById(id)
    res.send(gifts)
  } catch (error) {
    res.send(error.message)
  }

})


app.post('/products', async (req, res) => {
  try {
    
    const gifts =  productModel(req.body)
    await gifts.save()
    res.send(gifts)
  } catch (error) {
    res.send(error.message)
  }
})


app.put('/products/:id', async (req, res) => {
  try {
    const { id } = req.params
    const gifts = await productModel.findByIdAndUpdate(id,req.body)
    res.send(gifts)
  } catch (error) {
    res.send(error.message)
  }
})


app.delete('/products/:id', async (req, res) => {
  try {
    const { id } = req.params
    const gifts = await productModel.findByIdAndDelete(id,req.body)
    res.send(gifts)
  } catch (error) {
    res.send(error.message)
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})