import agent from "../../app/api/agent";
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled, tableCellClasses } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useStoreContext } from "../../app/context/StoreContext";

const BasketPage = () => {

    const { basket } = useStoreContext();

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
                                <IconButton >
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