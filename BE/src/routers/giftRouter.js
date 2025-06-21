import { Router } from "express"
import { createGifts, deleteByIdGifts, getAllGifts, getByIdGifts, updateByIdGifts } from "../controllers/giftController.js"


export const giftRouter = Router()

giftRouter.get('/', getAllGifts)
giftRouter.get('/:id', getByIdGifts)
giftRouter.post('/', createGifts)
giftRouter.put('/:id', updateByIdGifts)
giftRouter.delete('/:id', deleteByIdGifts)