const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

const mockData = [
  {
    id: 1,
    name: "Kahvikuppi",
    description: "Kahvikuppi",
    image: "tuote1.jpeg",
  },
  {
    id: 2,
    name: "Kirja",
    description: "Klassikkoromaani",
    image: "tuote2.jpg",
  },
  {
    id: 3,
    name: "Kynttilä",
    description: "Tuoksukynttilä",
    image: "tuote3.jpg",
  },
  {
    id: 4,
    name: "Juomapullo",
    description: "Kestävä juomapullo",
    image: "tuote4.jpg",
  },
  {
    id: 5,
    name: "Kuulokkeet",
    description: "Langattomat kuulokkeet",
    image: "tuote5.jpg",
  },
];

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "media")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "API Landing Page",
    message: "Tervetuloa API:iin!",
  });
});

app.get("/api/products", (req, res) => {
  res.status(200).json(mockData);
});

app.post("/api/products", express.json(), (req, res) => {
  const newProduct = {
    id: mockData.length + 1,
    ...req.body,
  };
  mockData.push(newProduct);
  res.status(201).json({
    message: "Uusi tuote lisätty",
    product: newProduct,
  });
});

app.delete("/api/products/:id", (req, res) => {
  const productIndex = mockData.findIndex(
    (p) => p.id === parseInt(req.params.id)
  );
  if (productIndex !== -1) {
    const deletedProduct = mockData.splice(productIndex, 1);
    res
      .status(200)
      .json({ message: "Tuote poistettu", product: deletedProduct });
  } else {
    res.status(404).json({ message: "Tuotetta ei löytynyt" });
  }
});

app.put("/api/products/:id", express.json(), (req, res) => {
  const product = mockData.find((p) => p.id === parseInt(req.params.id));
  if (product) {
    Object.assign(product, req.body);
    res.status(200).json({ message: "Tuotetta päivitetty", product });
  } else {
    res.status(404).json({ message: "Tuotetta ei löytynyt" });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: "Resurssia ei löydy" });
});

app.listen(PORT, () => {
  console.log(`Palvelin käynnissä portissa ${PORT}`);
});
