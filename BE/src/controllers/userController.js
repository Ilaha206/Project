import { userModel } from "../models/userModel.js"


export const getAllUsers = async (req, res) => {
    try {
        const user = await userModel.find({})
        res.send(user)
    } catch (error) {
        res.send(error.message)
    }

}

export const getByIdUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await userModel.findById(id)
        res.send(user)
    } catch (error) {
        res.send(error.message)
    }

}


export const createUsers = async (req, res) => {
    try {
        const newUser = new userModel(req.body)
        await newUser.save()
        res.send(newGift)
    } catch (error) {
        res.send(error.message)
    }
}


export const updateByIdUsers = async (req, res) => {
    try {
        const { id } = req.params
        const user = await userModel.findByIdAndUpdate(id, req.body)
        res.send(user)
    } catch (error) {
        res.send(error.message)
    }
}


export const deleteByIdUsers = async (req, res) => {
    try {
        const { id } = req.params;
        await userModel.findByIdAndDelete(id);
        res.send("Deleted");
    } catch (error) {
        res.send(error.message);
    }
};