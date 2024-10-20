import express from "express";
import db from "./config/db.js";
import bodyParser from "body-parser";
import productRoutes from "./routes/product.js";
import cors from "cors";
import path from "path";
const app = express();
const PORT = process.env.PORT;
db();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// making backend and frontend on same file

const __dirname = path.resolve();
app.use("/product", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
