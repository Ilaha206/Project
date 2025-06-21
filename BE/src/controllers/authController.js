import { userModel } from "../models/userModel.js"
import jwt from "jsonwebtoken"



export const loginController = async (req, res) => {
    try {
        const { password, email } = req.body
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.send("User not found")
        }
        if (user.password !== password) {
            return res.send("Wrong password")
        }
        const token = jwt.sign({ email: user.email, role: user.role }, process.env.JWT_KEY);
        res.send(token)
    } catch (error) {
        res.send(error.message)
    }
}
export const registerController = async (req, res) => {
    try {
        const { username, password, email } = req.body
        const newUser = new userModel(req.body)
        const token = jwt.sign({ username: username, role: "user" }, process.env.JWT_KEY);
        await newUser.save()
        res.send(token)
    } catch (error) {
        res.send(error.message)
    }
}





