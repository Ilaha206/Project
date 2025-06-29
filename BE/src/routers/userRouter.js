import { Router } from "express"
import { createUser, deleteByIdUser, getAllUser, getByIdUser, updateByIdUser } from "../controllers/userController.js"
import { verifyAccess } from "../middleware/authMiddleware.js"
import { validate } from "../middleware/authMiddleware.js";
import { userValidationSchema } from "../validations/userValidation.js";
export const userRouter = Router()

userRouter.get('/',verifyAccess(["admin"]), getAllUser)
    .get('/:id',verifyAccess(["admin","user"]), getByIdUser)
    .post('/',verifyAccess(["admin"]),validate(userValidationSchema), createUser)
    .put('/:id',verifyAccess(["admin"]),validate(userValidationSchema), updateByIdUser)
    .delete('/:id',verifyAccess(["admin"]), deleteByIdUser)