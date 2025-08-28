// src/models/Product.js
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
