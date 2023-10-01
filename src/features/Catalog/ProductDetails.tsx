import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/product";
import agent from "../../app/api/agent";

const ProductDetails = () => {
    //The useParams hook returns an object of key/value pairs of the dynamic params from the current URL which is id
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        id && agent.Catalog.details(id)
            .then(response => setProduct(response))
            .catch(error =>                // handle error
                console.log(error.response))
            .finally(() => setLoading(false)
                // always executed
            );
        console.log(product)
    }, [id])
    if (loading) {
        return <h3>Loading ...</h3>
    }
    if (product === null) {
        return <h3>Product not found</h3>
    }
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <img src={product.pictureUrl} alt={product.name} style={{ width: '100%' }}></img>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h3">
                        {product.name}
                    </Typography>
                    <Divider />
                    <Typography variant="h4" color='secondary' mt={2}>
                        {(product.price / 100).toFixed(2)}
                    </Typography>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>{product.name}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Description</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Type</TableCell>
                                    <TableCell>{product.type}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Brand</TableCell>
                                    <TableCell>{product.brand}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Quantity in stock</TableCell>
                                    <TableCell>{product.quantityInStock}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    )
}
export default ProductDetails;