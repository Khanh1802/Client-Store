import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Product } from "../../app/models/product";
interface Props {
    products: Product[];
}
const Catalog = ({ products }: Props) => {

    return (
        <>
            <List>
                {products.map((item) => {
                    return <ListItem key={item.id} >
                        <ListItemAvatar>
                            <Avatar src={item.pictureUrl} />
                        </ListItemAvatar>
                        <ListItemText>
                            {item.name}
                        </ListItemText>
                    </ListItem >
                })}
            </List>
        </>
    )
}
export default Catalog