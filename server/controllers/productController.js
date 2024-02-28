import asyncHandler from "express-async-handler";
import { Product } from "../models/ProductModel.js";

//create product
export const createProduct = asyncHandler(
  async (req, res, next) => {
    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  },
  (err, req, res, next) => {
    next(err);
  }
);

//get product
export const getProducts = asyncHandler(async (req, res, next) => {

  const products = await Product.find({}).sort("-createdAt");

  res.status(200).json(products);

}, (err, req, res, next) => {
    next(err)

});

//single product
export const singleProduct = asyncHandler(async (req, res) => {
 
  const { id } = req.params;
  const product = await Product.findById(id);

  if (!product.length) {
    res.status(400).json({ message: "Product not found" });
  }

  res.status(200).json(product);

});

//delete product
export const deleteProduct = asyncHandler(async (req, res, next) => {
  // try {
  //     const {id} = req.params
  //     const product = await Product.findByIdAndDelete(id)
  //     if(!product){
  //         res.status(404)
  //         throw new Error(`Product not found`)
  //     }
  //     res.status(204).json({message: "Product deleted"})
  // } catch (error) {
  //     res.status(500)
  //     throw new Error(error.message)
  // }

  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    res.status(404).json({ message: `Product not found` });
  }

  res.status(204).json({ message: "Product deleted" });
}, (err, req, res, next) => {
    next(err)
});

//update product
export const updateProduct = asyncHandler(async (req, res) => {
  // try {
  //     const {id} = req.params
  //     const product = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
  //     if(!product){
  //         res.status(404)
  //         throw new Error(`Product not found`)
  //     }
  //     const updatedProduct = await Product.findById(id)
  //     res.status(200).json(updatedProduct)
  // } catch (error) {
  //     res.status(500)
  //     throw new Error(error.message)
  // }
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (product) {
    const updatedProduct = await product.save();
    res.status(200).json(updatedProduct);
  } else {
    res.status(404).json({ message: `Product not found` });
  }
});
