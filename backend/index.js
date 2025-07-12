import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cors from "cors";
import orderRoutes from "./routes/orderRoutes.js";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js";
import Product from "./models/Product.js";
dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//mongo
mongoose
  .connect("mongodb://localhost:27017/ecom", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/", authRoutes);

// Add this with your other app.use() routes
app.use("/api/orders", orderRoutes);
app.use("/api", productRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
