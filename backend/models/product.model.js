import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

const productmodel = mongoose.model("productmodel", productSchema);
export default productmodel;
