import asyncHandler from 'express-async-handler'
import { Product } from '../models/ProductModel.js';

//create product
export const createProduct = asyncHandler(async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

//get product
export const getProducts = asyncHandler(async(req, res) => {
    try {
        const products = await Product.find({}).sort("-createdAt")
        res.status(200).json(products)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

//single product
export const singleProduct = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

//delete product
export const deleteProduct = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)        
        if(!product){
            res.status(404)
            throw new Error(`Product not found`)
        }
        res.status(204).json({message: "Product deleted"})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

//update product
export const updateProduct = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })        
        if(!product){
            res.status(404)
            throw new Error(`Product not found`)
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
