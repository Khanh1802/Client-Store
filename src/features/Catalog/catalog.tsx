import { useState, useEffect } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import agent from "../../app/api/agent";
const Catalog = () => {

    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        //api for the get request      
        agent.Catalog.list().then(products => setProducts(products));
    }, [])
    return (
        <>
            <ProductList products={products} />
        </>
    )
}
export default Catalog