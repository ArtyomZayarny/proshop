import dotenv from "dotenv";
import colors from "colors";
import User from "./models/userModel.js";
import users from "./data/users.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();
const importData = async () => {
  try {
    const createdUser = await User.insertMany(users);
    console.log("Data Imported".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

process.argv[2] === "-d" ? destroyData() : importData();
