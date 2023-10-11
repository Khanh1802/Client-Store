import { useState, useEffect } from "react";
import { FilterProduct, Product, ProductParam } from "../../app/models/product";
import ProductList from "./ProductList";
import agent from "../../app/api/agent";
import { Box, Checkbox, CircularProgress, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Pagination, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";

const sortOptions = [
    { value: "name", label: "Name" },
    { value: "priceDesc", label: "Price - Hight to low" },
    { value: "price", label: "Price - Low to hight" },
]

function getAxiosParams(productParams: ProductParam) {
    const params = new URLSearchParams();
    params.append('OrderBy', productParams.orderBy);
    params.append('PageNumber', productParams.pageNumber.toString());
    params.append('PageSize', productParams.pageSize.toString());
    if (productParams.search) {
        params.append('Search', productParams.search);
    }
    if (productParams.brands) {
        params.append('Brands', productParams.brands.toString());
    }
    if (productParams.types) {
        params.append('Types', productParams.types.toString());
    }
    return params;
}

function initParams() {
    const productParams: ProductParam = {
        orderBy: "",
        pageNumber: 1,
        pageSize: 5
    }
    return productParams;
}

const Catalog = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [productParams, setProductParams] = useState<ProductParam>(initParams());
    const [filterProduct, setFilterProduct] = useState<FilterProduct>();
    const [loading, setLoading] = useState(false);
    const handleSearchProduct = (value: string) => {
        debugger;
        setLoading(true);
        productParams.search = value;
        setProductParams(productParams)
    }

    useEffect(() => {
        debugger;
        setLoading(false);
        const params = getAxiosParams(productParams)
        //api for the get request   
        agent.Catalog.list(params).then(products => setProducts(products));
        agent.Catalog.filterBrands().then(filterProduct => setFilterProduct(filterProduct));
    }, [loading])

    if (loading) {
        return (
            <CircularProgress />
        )
    }
    return (
        <>
            <Grid container spacing={4}>
                < Grid item xs={3}  >
                    <Paper sx={{ mb: 2 }}>
                        <TextField
                            label="Search products"
                            variant="outlined"
                            fullWidth
                            value={productParams?.search}
                            onChange={e => handleSearchProduct(e.target.value)}
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
                            Displaying 1-5 of 20 items
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