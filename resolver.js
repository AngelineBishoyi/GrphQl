const { subscribe } = require("graphql");
const Product = require("../models/Product");





const resolvers = {
  Query: {
    products: async () => await Product.findAll(),
    product: async (_, { id }) => await Product.findByPk(id),
  },
  Mutation: {
    createProduct: async (_, { title, category, price, inStock }) => {
      try {
      
        const newProduct = await Product.create({ title, category, price, inStock });
 
        return newProduct;
      } catch (error) {
        console.error("Error creating product:", error);
        throw new Error("Failed to create product.");
      }
    },
    deleteProduct: async (_, { id }) => {
      const deleted = await Product.destroy({ where: { id } });
      return deleted > 0;
    },
    updateProduct : async(_,{id,title,category,price,inStock})=>{
        const product = await Product.findByPk(id);
        if(!product) throw new error("Product not found")

        await product.update({title,category,price,inStock});
        return product;
    }
  },

};

module.exports = { resolvers };
