import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  singleProduct,
  updateProduct,
} from "../controllers/productController.js";
const router = express.Router();

router.post("/createProduct", createProduct);
router.get("/getProducts", getProducts);
router.get("/product/:id", singleProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.patch("/updateProduct/:id", updateProduct);

export default router;
