import { Product } from "../../app/models/product";
interface Props {
    product: Product[];
}
//C1
const Catalog = (props: Props) => {
    //C2: remove props
    // const Catalog = ({products}: Props) => {

    return (
        <div>
            <ul>
                {props.product.map((item) => {
                    return <li key={item.id}>
                        <h4>{item.name} - {item.price}</h4>
                    </li>;
                })}
            </ul>
        </div>
    )
}
export default Catalog