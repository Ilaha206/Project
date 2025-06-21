import { Router } from "express"
import { createUsers, deleteByIdUsers, getAllUsers, getByIdUsers, updateByIdUsers } from "../controllers/userController.js"


export const userRouter = Router()

userRouter.get('/', getAllUsers)
.get('/:id', getByIdUsers)
.post('/', createUsers)
.put('/:id', updateByIdUsers)
.delete('/:id', deleteByIdUsers)