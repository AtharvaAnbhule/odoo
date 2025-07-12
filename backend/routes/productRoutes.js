// routes/productRoutes.js

import express from "express"
import { createProduct } from "../controllers/productController.js"
import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

// You can enable protection when auth is ready
// router.post("/products/add", protect, createProduct)

router.post("/products/add", createProduct)

export default router
