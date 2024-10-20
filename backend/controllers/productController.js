import productmodel from "../models/product.model.js";
import mongoose from "mongoose";
export const createProduct = async (req, res) => {
  const { name, image, price } = req.body;
  try {
    const products = await productmodel.create({
      name,
      image,
      price,
    });
    res.send({ successs: true, data: products });
  } catch (error) {
    res.status(500).send(error);
  }
};
export const getAllProducts = async (req, res) => {
  try {
    const products = await productmodel.find();
    res.status(200).send({ successs: true, data: products });
  } catch (error) {
    res.status(500).send(error);
  }
};
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const products = await productmodel.findByIdAndDelete(id);
      res.status(200).send({ successs: true, data: products });
    } else {
      res.status(404).send({ success: false, message: "Product not found" });
    }
  } catch (error) {
    res.status(500).send("Product not found");
  }
};
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  if (mongoose.Types.ObjectId.isValid(id)) {
    const products = await productmodel.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).send({ success: true, data: products });
  } else {
    res.status(404).send({ success: false, message: "Product not found" });
  }
};
