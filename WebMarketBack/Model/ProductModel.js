import mongoose from "mongoose";
import Users from "./UserModel.js";
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
    maxlength: [100, "maxlength is 100"],
  },
  stock: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  images: {
    type: String,
  },
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Users,
  },
});
const Product = mongoose.model("Products", ProductSchema);
export default Product;
