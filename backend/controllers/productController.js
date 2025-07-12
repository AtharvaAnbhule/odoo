import express from "express"
import Product from "../models/Product.js"

const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body)
    res.status(201).json({ success: true, data: newProduct })
  } catch (error) {
    console.error("Error creating product:", error)
    res.status(500).json({ success: false, message: "Server error" })
  }
}

export { createProduct }
