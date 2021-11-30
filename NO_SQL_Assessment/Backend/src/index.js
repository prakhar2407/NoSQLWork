const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

// routes
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");

env.config();

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.s9opd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database connected");
  });

app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.status(200).json({
    message: "Hello From App made by Prakhar Bansal",
  });
});
app.use("/api", authRoutes);
app.use("/api", productRoutes);
app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
