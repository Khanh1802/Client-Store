import { List } from "@mui/material"
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";
interface Props {
    products: Product[];
}
const ProductList = ({ products }: Props) => {

    return (
        <>
            <List>
                {products.map((item) => {
                    return (
                        <>
                            <ProductCard key={item.id} product={item} />
                        </>
                    )
                })}
            </List>
        </>
    )
}
export default ProductList