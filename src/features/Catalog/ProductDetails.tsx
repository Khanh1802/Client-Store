import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/product";

const ProductDetails = () => {
    //The useParams hook returns an object of key/value pairs of the dynamic params from the current URL which is id
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        axios.get(`https://localhost:7113/api/Product/${id}`)
            .then(response => setProduct(response.data))
            .catch(error =>                // handle error
                console.log(error))
            .finally(() => setLoading(false)
                // always executed
            );
        console.log(product)
    }, [])
    if (loading) {
        return <h3>Loading ...</h3>
    }
    if (product === null) {
        return <h3>Not found product ...</h3>
    }
    return (
        <>
            <Typography variant="h2" >
                {product.name}
            </Typography>
        </>
    )
}
export default ProductDetails;