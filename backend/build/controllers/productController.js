import Product from '../models/ProductModel.js';
import { StatusCodes } from 'http-status-codes';
/**
 * @description Fetch all products
 * @param req
 * @param res
 * @access Public
 */
export const getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.status(StatusCodes.OK).json({ products, count: products.length });
};
/**
 * @description Fetch single product
 * @param req
 * @param res
 * @access Public
 */
export const getSingleProduct = async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    res.status(StatusCodes.OK).json({ product });
};
