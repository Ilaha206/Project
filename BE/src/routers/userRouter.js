import { Router } from "express"
import { createUser, deleteByIdUser, getAllUser, getByIdUser, updateByIdUser } from "../controllers/userController.js"
import { verifyAccess } from "../middleware/authMiddleware.js"


export const userRouter = Router()

userRouter.get('/',verifyAccess(["admin"]), getAllUser)
    .get('/:id',verifyAccess(["admin","user"]), getByIdUser)
    .post('/',verifyAccess(["admin"]), createUser)
    .put('/:id',verifyAccess(["admin"]), updateByIdUser)
    .delete('/:id',verifyAccess(["admin"]), deleteByIdUser)