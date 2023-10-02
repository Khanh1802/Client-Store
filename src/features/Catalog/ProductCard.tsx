import { Avatar, Card, CardHeader, CardMedia, Button, CardActions, CardContent, Typography } from "@mui/material";
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";
import { useState } from "react";
import agent from "../../app/api/agent";
import { LoadingButton } from "@mui/lab";
import { useStoreContext } from "../../app/context/StoreContext";
import { currencyFormat } from "../../app/util/util";

interface Props {
    product: Product;
}
const ProductCard = ({ product }: Props) => {

    const [loading, setLoading] = useState(false);
    const { setBasket } = useStoreContext();
    const handleAddItem = (productId: string) => {
        setLoading(true);
        agent.Basket.addItem(productId)
            .then(basket => setBasket(basket))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }

    return (
        <>
            <Card  >
                {/* Create Header */}
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: 'secondary.main' }} aria-label="recipe">
                            {product.name.charAt(0).toUpperCase()}
                        </Avatar>
                    }
                    title={product.name}
                    titleTypographyProps={
                        { sx: { fontWeight: 'bold', color: 'primary.main' } }
                    }
                />
                <CardMedia
                    //use backgroundSize fix image shrunk 
                    sx={{ height: 140, backgroundSize: 'contain', bgcolor: 'primary.light' }}
                    image={product.pictureUrl}
                    title={product.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {currencyFormat(product.price)} / {product.type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.brand}
                    </Typography>
                </CardContent>
                <CardActions>
                    <LoadingButton
                        loading={loading}
                        onClick={() => handleAddItem(product.id)}
                        size="small">Add to card
                    </LoadingButton>
                    <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
                </CardActions>
            </Card>
        </>
    )
}
export default ProductCard;