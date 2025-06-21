import { productModel } from "../models/giftModel.js"


export const getAllGifts = async (req, res) => {
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
        const gift = await productModel.findById(id)
        res.send(gift)
    } catch (error) {
        res.send(error.message)
    }

}


export const createGifts = async (req, res) => {
    try {
        const newGift = new productModel(req.body)
        await newGift.save()
        res.send(newGift)
    } catch (error) {
        res.send(error.message)
    }
}


export const updateByIdGifts = async (req, res) => {
    try {
        const { id } = req.params
        const gift = await productModel.findByIdAndUpdate(id, req.body)
        res.send(gift)
    } catch (error) {
        res.send(error.message)
    }
}


export const deleteByIdGifts = async (req, res) => {
    try {
        const { id } = req.params;
        await productModel.findByIdAndDelete(id);
        res.send("Deleted");
    } catch (error) {
        res.send(error.message);
    }
};