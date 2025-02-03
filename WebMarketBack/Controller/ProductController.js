import Product from "../Model/ProductModel.js";
export const createProduct = async (req, res, next) => {
  try {
    const dataRecieved = req.body;
    const newProduct = await Product.create({ ...dataRecieved });
    res.status(201).json({ status: "success", data: newProduct });
  } catch (err) {
    res.status(400).json({ status: "failed", msg: err.message });
  }
};
export const deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).json({ status: "successfully deleted !" });
  } catch (err) {
    res.status(400).json({ status: "failed in deleting", msg: err.message });
  }
};
export const updateProduct = async (req, res, next) => {
  try {
    let data = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ status: "success", dt: data });
  } catch (err) {
    res.status(400).json({ status: "failed", msg: err.message });
  }
};
export const getAllProducts = async (req, res, next) => {
  try {
    let allProducts = await Product.find({});
    res.status(200).json({ status: "success", data: allProducts });
  } catch (err) {
    res
      .status(400)
      .json({ status: "failed in showing all products", err: err.message });
  }
};
export const getProductsById = async (req, res, next) => {
  try {
    let params = req.params.id;
    let products = await Product.find({ sellerId: params });
    res.status(200).json({ status: "success", data: products });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "failed",
      msg: err.message,
    });
  }
};

export default {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  getProductsById,
};
