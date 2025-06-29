import { Router } from "express"
import { loginController, registerController} from "../controllers/authController.js"
import { validate } from "../middleware/authMiddleware.js";
import {loginValidationSchema, registerValidationSchema } from "../validations/authValidation.js";

export const authRouter = Router()

authRouter.post('/login', validate(loginValidationSchema), loginController)
    .post('/register', validate(registerValidationSchema), registerController)

