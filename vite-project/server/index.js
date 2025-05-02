import express from "express";
import cors from "cors";
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());


let products = [
  { title: "Товар", description: "Описание", price: "9999" }
];

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from server!", title: "Яблоко" });
});


app.get("/data", (req, res) => {
  res.json(products);
});

app.get("/datas", (req, res) => {
  if (products.length > 0) {
    res.json(products[0]);
  } else {
    res.status(404).json({ error: "No products found" });
  }
});

app.post("/data", (req, res) => {
  try {
    const newProduct = req.body;
    if (!newProduct.title || !newProduct.price) {
      return res.status(400).json({ error: "Title and price are required" });
    }
    
    products.push(newProduct);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});