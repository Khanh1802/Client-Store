import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/Catalog/Catalog";
import Header from "./Header";
import { Container, CssBaseline } from "@mui/material";
function App() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch('https://localhost:7113/api/product')           //api for the get request
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [])

  return (
    <div>
      <CssBaseline />
      <Header />
      <Container >
        <Catalog products={products} />
      </Container>
    </div>

  )
}
export default App;