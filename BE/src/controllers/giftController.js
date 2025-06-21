import {productModel} from "../models/giftModel.js"


export const getAllGifts =  async (req, res) => {
  try {
    const gifts = await productModel.find({})
    res.send(gifts)
  } catch (error) {
    res.send(error.message)
  }

}

export const getByIdGifts = async (req, res) => {
  try {
    const { id } = req.params
    const gifts = await productModel.findById(id)
    res.send(gifts)
  } catch (error) {
    res.send(error.message)
  }

}


export const createGifts = async (req, res) => {
  try {
    const gifts =  productModel(req.body)
    await gifts.save()
    res.send(gifts)
  } catch (error) {
    res.send(error.message)
  }
}


export const updateByIdGifts = async (req, res) => {
  try {
    const { id } = req.params
    const gifts = await productModel.findByIdAndUpdate(id,req.body)
    res.send(gifts)
  } catch (error) {
    res.send(error.message)
  }
}


export const deleteByIdGifts = async (req, res) => {
  try {
    const { id } = req.params
    const gifts = await productModel.findByIdAndDelete(id,req.body)
    res.send(gifts)
  } catch (error) {
    res.send(error.message)
  }
}