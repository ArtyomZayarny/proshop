import Product from "../models/productModel.js";

const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

//@desc Fetch single product
//@route GET /api/product/:id
//@access Public
const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not founded");
  }
};

export { getProducts, getProductById };
