import express from "express";
let productRouter = express.Router();
import productController from "../Controller/ProductController.js";
productRouter.post("/addProduct", productController.createProduct);
//productRouter.get("/getProduct", productController.getProductByName);
productRouter.patch("/updateProduct/:id", productController.updateProduct);
productRouter.delete("/deleteProduct/:id", productController.deleteProduct);
productRouter.get("/getAllProducts", productController.getAllProducts);
productRouter.get("/getProductsById/:id", productController.getProductsById);
export default productRouter;
