import { Router } from "express"
import { createGifts, deleteByIdGifts, getAllGifts, getByIdGifts, updateByIdGifts } from "../controllers/giftController.js"
import { verifyAccess } from "../middleware/authMiddleware.js"
import { validate } from "../middleware/authMiddleware.js";
import { giftValidationSchema } from "../validations/giftValidation.js";

export const giftRouter = Router()

giftRouter.get('/', getAllGifts)
giftRouter.get('/:id', getByIdGifts)
giftRouter.post('/',verifyAccess(["user","admin"]),validate(giftValidationSchema), createGifts)
giftRouter.put('/:id',verifyAccess(["user","admin"]),validate(giftValidationSchema), updateByIdGifts)
giftRouter.delete('/:id',verifyAccess(["user","admin"]), deleteByIdGifts)