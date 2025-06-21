import { userModel } from "../models/userModel.js"
import jwt from "jsonwebtoken"



export const loginController = async (req, res) => {
    try {
        const { username, password, email } = req.body
        const user = userModel.findOne({username:username})
        if (!user) {
            return res.send("User not found")
        }
        if (!(user.password===password)) {
           return res.send("Wrong password") 
        }
        const token = jwt.sign({username:username,role:user.role}, process.env.JWT_KEY);
        res.send(token)
    } catch (error) {
        res.send(error.message)
    }
}
export const registerController = async (req, res) => {
    try {
        const { password, email } = req.body
        const newUser = new productModel(req.body)
        await newUser.save()
        res.send(newUser)
    } catch (error) {
        res.send(error.message)
    }
}





    ;