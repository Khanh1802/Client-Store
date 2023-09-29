import { useEffect, useState } from "react"
import { Basket } from "../../app/models/basket";
import agent from "../../app/api/agent";
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled, tableCellClasses } from "@mui/material";
import { Delete } from "@mui/icons-material";

const BasketPage = () => {
    const [loading, setLoading] = useState(true);
    const [basket, setBasket] = useState<Basket | null>(null);

    useEffect(() => {
        agent.Basket.basket()
            .then(data => setBasket(data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])


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

    const handleDeleteItem = (productId: string, quantity: number) => {
        setLoading(true);
        try {
            agent.Basket.deleteItem(productId, quantity);
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

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
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Product </StyledTableCell>
                        <StyledTableCell align="right">Quantity</StyledTableCell>
                        <StyledTableCell align="right">Price</StyledTableCell>
                        <StyledTableCell align="right">Brand</StyledTableCell>
                        <StyledTableCell align="right">Total price</StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {basket.items.map(basketItem => (
                        <StyledTableRow key={basketItem.id}>
                            <StyledTableCell component="th" scope="row">
                                {basketItem.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">${(basketItem.price / 100).toFixed(2)}</StyledTableCell>
                            <StyledTableCell align="right">{basketItem.quantity}</StyledTableCell>
                            <StyledTableCell align="right">{basketItem.brand}</StyledTableCell>
                            <StyledTableCell align="right">
                                ${(basketItem.price * basketItem.quantity / 100).toFixed(2)}
                            </StyledTableCell><StyledTableCell align="right">
                                <IconButton onClick={() => handleDeleteItem(basketItem.productId, basketItem.quantity)}>
                                    <Delete fontSize="large" />
                                </IconButton>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BasketPage;