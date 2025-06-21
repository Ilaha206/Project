import { Router } from "express"
import { createGifts, deleteByIdGifts, getAllGifts, getByIdGifts, updateByIdGifts } from "../controllers/giftController.js"


export const userRouter = Router()

userRouter.get('/', getAllGifts)
.get('/:id', getByIdGifts)
.post('/', createGifts)
.put('/:id', updateByIdGifts)
.delete('/:id', deleteByIdGifts)