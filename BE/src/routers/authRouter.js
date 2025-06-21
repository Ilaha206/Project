import { Router } from "express"

export const authRouter = Router()

authRouter.post('/login', postAllUser)
    .post('/register', postByIdUser)