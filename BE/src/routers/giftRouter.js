import { Router } from "express"
import { createGifts, deleteByIdGifts, getAllGifts, getByIdGifts, updateByIdGifts } from "../controllers/giftController.js"


const giftRouter = Router()

giftRouter.get('/products', getAllGifts )
giftRouter.get('/products/:id', getByIdGifts )
giftRouter.post('/products', createGifts )
giftRouter.put('/products/:id',updateByIdGifts )
giftRouter.delete('/products/:id', deleteByIdGifts)