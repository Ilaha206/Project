import { Router } from "express"
import { 
  loginController, 
  registerController,
  forgotPasswordController,
  verifyResetCodeController,
  resetPasswordController
} from "../controllers/authController.js"

import { validate } from "../middleware/authMiddleware.js";
import { loginValidationSchema, registerValidationSchema } from "../validations/authValidation.js";

export const authRouter = Router()

authRouter.post('/login', validate(loginValidationSchema), loginController)
          .post('/register', validate(registerValidationSchema), registerController)
          .post('/forgot-password', forgotPasswordController)
          .post('/verify-reset-code', verifyResetCodeController)
          .post('/reset-password', resetPasswordController)
