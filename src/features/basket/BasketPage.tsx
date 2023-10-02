import agent from "../../app/api/agent";
import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled, tableCellClasses } from "@mui/material";
import { Add, Delete, Remove } from "@mui/icons-material";
import { useStoreContext } from "../../app/context/StoreContext";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import BasketSummary from "./BasketSummary";

const BasketPage = () => {
    const { basket, setBasket, deleteItem } = useStoreContext();
    const [loading, setLoading] = useState(false);
    const handleDeleteBasketItem = (productId: string, quantity: number) => {
        setLoading(true)
        agent.Basket.deleteItem(productId, quantity)
            .then(() => deleteItem(productId, quantity))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }
    const handleAddBasketItem = (productId: string) => {
        setLoading(true)
        agent.Basket.addItem(productId, 1)
            .then(basket => setBasket(basket))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    if (!basket) {
        return (
            <Typography variant="h3">Basket is empty</Typography>
        )
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Product </StyledTableCell>
                            <StyledTableCell align="right">Price</StyledTableCell>
                            <StyledTableCell align="center">Quantity</StyledTableCell>
                            <StyledTableCell align="right">Brand</StyledTableCell>
                            <StyledTableCell align="right">Total price</StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {basket.items.map(basketItem => (
                            <StyledTableRow key={basketItem.id}>
                                <StyledTableCell component="th" scope="row">
                                    <Box display='flex' alignItems='center'>
                                        <img src={basketItem.pictureUrl} alt={basketItem.name} style={{ height: 50, marginRight: 20 }}></img>
                                        <span>{basketItem.name}</span>
                                    </Box>
                                </StyledTableCell>
                                <StyledTableCell align="right">${(basketItem.price / 100).toFixed(2)}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <LoadingButton loading={loading} color="error">
                                        <Remove onClick={() => handleDeleteBasketItem(basketItem.productId, 1)} />
                                    </LoadingButton>
                                    {basketItem.quantity}
                                    <LoadingButton loading={loading} color="secondary">
                                        <Add onClick={() => handleAddBasketItem(basketItem.productId)} />
                                    </LoadingButton>
                                </StyledTableCell>
                                <StyledTableCell align="right">{basketItem.brand}</StyledTableCell>
                                <StyledTableCell align="right">
                                    ${(basketItem.price * basketItem.quantity / 100).toFixed(2)}
                                </StyledTableCell><StyledTableCell align="right">
                                    <LoadingButton loading={loading} >
                                        <Delete fontSize="large" onClick={() => handleDeleteBasketItem(basketItem.productId, basketItem.quantity)} />
                                    </LoadingButton>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Grid container >
                <Grid xs={6} />
                <Grid xs={6}>
                    <BasketSummary />
                </Grid>
            </Grid>
        </>
    );
}

export default BasketPage;