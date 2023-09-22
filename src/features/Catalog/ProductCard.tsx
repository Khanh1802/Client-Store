import { Avatar, Card, CardHeader, CardMedia, Button, CardActions, CardContent, Typography } from "@mui/material";
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";

interface Props {
    product: Product;
}
const ProductCard = ({ product }: Props) => {
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
                        ${(product.price / 100).toFixed(2)} / {product.type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.brand}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Add to card</Button>
                    <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
                </CardActions>
            </Card>
        </>
    )
}
export default ProductCard;