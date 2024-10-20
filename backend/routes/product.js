import express from "express";
import mongoose, { mongo } from "mongoose";
import productmodel from "../models/product.model.js";
import {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
} from "../controllers/productController.js";
const router = express.Router();

router.post("/create", createProduct);
router.get("/allproducts", getAllProducts);
router.delete("/delete/:id", deleteProduct);
router.put("/update/:id", updateProduct);

export default router;
