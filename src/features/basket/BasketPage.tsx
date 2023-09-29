import { useEffect, useState } from "react"
import { Basket } from "../../app/models/basket";
import agent from "../../app/api/agent";
import { Typography } from "@mui/material";

const BasketPage = () => {
    const [loading, setLoading] = useState(true);
    const [basket, setBasket] = useState<Basket | null>(null);

    useEffect(() => {
        agent.Basket.basket()
            .then(data => setBasket(data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return (
            <>
                <Typography variant="h3">Is loading ...</Typography>
            </>
        )
    }

    if (basket === null) {
        return (
            <>
                <Typography variant="h3">Basket is empty</Typography>
            </>
        )
    }

    return (
        <>
            <Typography variant="h3"> {basket.buyerId}</Typography>
        </>
    )
}

export default BasketPage;