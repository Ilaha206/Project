import { Router } from "express"
import { createGifts, deleteByIdGifts, getAllGifts, getByIdGifts, updateByIdGifts } from "../controllers/giftController.js"
import { verifyAccess } from "../middleware/authMiddleware.js"


export const giftRouter = Router()

giftRouter.get('/', getAllGifts)
giftRouter.get('/:id', getByIdGifts)
giftRouter.post('/',verifyAccess(["user","admin"]), createGifts)
giftRouter.put('/:id',verifyAccess(["user","admin"]), updateByIdGifts)
giftRouter.delete('/:id',verifyAccess(["user","admin"]), deleteByIdGifts)