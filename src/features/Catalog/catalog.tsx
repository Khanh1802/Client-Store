import { useState, useEffect } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
const Catalog = () => {

    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        //api for the get request
        fetch('https://localhost:7113/api/product')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <>
            <ProductList products={products} />
        </>
    )
}
export default Catalog