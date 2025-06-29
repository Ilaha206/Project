import { Router } from "express";
import {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategoryById,
    deleteCategoryById
} from "../controllers/categoryController.js";
import { verifyAccess, validate } from "../middleware/authMiddleware.js";
import { categoryValidationSchema } from "../validations/categoryValidation.js";

export const categoryRouter = Router();

categoryRouter.get("/", getAllCategories);
categoryRouter.get("/:id", getCategoryById);
categoryRouter.post("/", verifyAccess(["admin"]), validate(categoryValidationSchema), createCategory);
categoryRouter.put("/:id", verifyAccess(["admin"]), validate(categoryValidationSchema), updateCategoryById);
categoryRouter.delete("/:id", verifyAccess(["admin"]), deleteCategoryById);