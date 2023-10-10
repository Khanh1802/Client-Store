import { useState, useEffect } from "react";
import { FilterProduct, Product } from "../../app/models/product";
import ProductList from "./ProductList";
import agent from "../../app/api/agent";
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Pagination, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";


const sortOptions = [
    { value: "name", label: "Name" },
    { value: "priceDesc", label: "Price - Hight to low" },
    { value: "price", label: "Price - Low to hight" },
]

const Catalog = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filterProduct, setFilterProduct] = useState<FilterProduct>();
    useEffect(() => {
        //api for the get request      
        agent.Catalog.list().then(products => setProducts(products));
        agent.Catalog.filterBrands().then(filterProduct => setFilterProduct(filterProduct));
    }, [])
    return (
        <>
            <Grid container spacing={4}>
                < Grid item xs={3}  >
                    <Paper sx={{ mb: 2 }}>
                        <TextField
                            label="Search products"
                            variant="outlined"
                            fullWidth
                        />
                    </Paper>

                    <Paper sx={{ mb: 2, p: 2 }}>
                        <FormControl >
                            <RadioGroup>
                                {sortOptions.map((item, index) => (
                                    <FormControlLabel value={item.value} control={<Radio />} label={item.label} key={index} />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </Paper>

                    <Paper sx={{ mb: 2, p: 2 }}>
                        <FormGroup>
                            {filterProduct?.brands.map((item, index) => (
                                <FormControlLabel control={<Checkbox />} label={item} key={index} />
                            ))}
                        </FormGroup>
                    </Paper>

                    <Paper sx={{ mb: 2, p: 2 }}>
                        <FormGroup>
                            {filterProduct?.types.map((item, index) => (
                                <FormControlLabel control={<Checkbox />} label={item} key={index} />
                            ))}
                        </FormGroup>
                    </Paper>
                </Grid>

                < Grid item xs={9}  >
                    <ProductList products={products} />
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={9}>
                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                        <Typography>
                            Displaying 1-6 of 20 items
                        </Typography>
                        <Pagination color="secondary"
                            size="large"
                            count={10}
                            page={1}
                        />
                    </Box>
                </Grid>

            </Grid >
        </>
    )
}
export default Catalog