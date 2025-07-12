import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    category: String,
    size: String,
    condition: String,
    brand: String,
    color: String,
    material: String,
    originalPrice: String,
    swapPreference: String,
    minPoints: String,
    preferredItems: String,
    isNegotiable: Boolean,
    tags: [String],
    images: [String],
  },
  { timestamps: true }
)

const Product = mongoose.model("Product", ProductSchema)

export default Product;
