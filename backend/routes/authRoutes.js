import express from "express";
import {
  registerUser,
  getUserProfile,
  loginUser,
} from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/api/signup", registerUser);
router.post("/api/login", loginUser);
router.get("/profile", protect, getUserProfile);

export default router;
