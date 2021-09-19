import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV || "development";

app.listen(PORT, console.log(`Server running in ${MODE} mode on port ${PORT}`));
console.log("server");

app.get("/", (req, res) => {
  res.send("Api is running...");
});
