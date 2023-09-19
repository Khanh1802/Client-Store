import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/Catalog/catalog";
function App() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch('https://localhost:7113/api/product')           //api for the get request
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [])

  return (
    <div>
      <h1>Store</h1>
      <Catalog product={products} />
    </div>

  )
}
export default App;