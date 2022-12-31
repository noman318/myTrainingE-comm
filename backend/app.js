import express from "express";
import data from "./data.js";
import cors from "cors";

const PORT = 5000;
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Root route testing");
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
  //   console.log("data", data);
});

app.get("/api/product/:id", (req, res) => {
  // console.log("route hit", req.params);
  const product = data.products.find((f) => f._id === (req.params.id));
  // console.log("product", product);
  if (product) {
    res?.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App server is running on port ${PORT}`);
  }
});
