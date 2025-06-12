import express from "express"
import mongoose from "mongoose"
import './config/config.js'
const app = express()
const port = 3000


const productSchema = new mongoose.Schema({
  image: String,
  title: String,
  description: String,
  contact: {
    phone: { type: String },
    instagram: { type: String }
  },
  price: Number,

});

const productModel = mongoose.model('Product', productSchema);

app.get('/', async (req, res) => {
  try {
    const gifts = await productModel.find({})
    res.send(gifts)
  } catch (error) {
    res.send(error.message)
  }

})

app.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const gifts = await productModel.findById(id)
    res.send(gifts)
  } catch (error) {
    res.send(error.message)
  }

})


app.post('/', async (req, res) => {
  try {
    const { body } = req.body
    const gifts =  productModel(req.body)
    await gifts.save()
    res.send(gifts)
  } catch (error) {
    res.send(error.message)
  }
})


app.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const gifts = await productModel.findByIdAndUpdate(id,req.body)
    res.send(gifts)
  } catch (error) {
    res.send(error.message)
  }
})


app.delete('/user', async (req, res) => {
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