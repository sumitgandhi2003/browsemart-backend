const Product = require("../../model/productSchema");

const getProductById = async (req, res) => {
  const id = req.body.productId;

  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).send("Product not found");
    res.send(product);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
  //   res.json({
  //     _id: req.params.id,
  //     name: "Sumit Gandhi",
  //     price: 1000,
  //     description: "this is a product",
  //     image:
  //       "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg",
  //     category: "more pankh",
  //     stock: 1000,
  //   });
};
module.exports = getProductById;