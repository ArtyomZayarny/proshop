import dotenv from "dotenv";
import colors from "colors";
import User from "./models/userModel.js";
import users from "./data/users.js";
import connectDB from "./config/db.js";
import Product from "./models/productModel.js";
import products from "./data/products.js";

dotenv.config();

connectDB();
const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();

    const createdUser = await User.insertMany(users);
    const adminUser = createdUser[0]._id;
    const sampleProducts = products.map((p) => {
      return { ...p, user: adminUser };
    });
    await Product.insertMany(sampleProducts);
    console.log("Data Imported".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed".red.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

process.argv[2] === "-d" ? destroyData() : importData();
