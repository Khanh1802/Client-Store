import { Grid } from "@mui/material"
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";
interface Props {
    products: Product[];
}
const ProductList = ({ products }: Props) => {

    return (
        <>
            {/* Khoang cach cac item 8 pixels => 8*4 = 32 pixels*/}
            <Grid container spacing={2}>

                {products.map((item) => (
                    // 3 columns of our 12 column grids.
                    /* take our key and put it up on the grid 
                            because this is the first element that we're looping over inside here.*/
                    < Grid item xs={4} key={item.id} >
                        <ProductCard product={item} />
                    </Grid>
                ))}
            </Grid >
        </>
    )
}
export default ProductList